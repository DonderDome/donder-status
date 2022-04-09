/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  LitElement,
  html,
  TemplateResult,
  css,
  PropertyValues,
  CSSResultGroup,
} from 'lit';
import { property, state } from "lit/decorators";
import {
  HomeAssistant,
  hasConfigOrEntityChanged,
  hasAction,
  ActionHandlerEvent,
  handleAction,
  LovelaceCardEditor,
  getLovelace,
} from 'custom-card-helpers'; // This is a community maintained npm module with common helper functions/types. https://github.com/custom-cards/custom-card-helpers
import { CARD_VERSION } from './constants';
import './editor';

import type { BoilerplateCardConfig } from './types';
import { actionHandler } from './action-handler-directive';

/* eslint no-console: 0 */
console.info(
  `%c  JARVIS-STATS \n%c  version: ${CARD_VERSION}  `,
  'color: orange; font-weight: bold; background: black',
  'color: white; font-weight: bold; background: dimgray',
);

(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'jarvis-stats',
  name: 'Boilerplate Card',
  description: 'A template custom card for you to create something awesome',
});

export class BoilerplateCard extends LitElement {
  public static async getConfigElement(): Promise<LovelaceCardEditor> {
    // REPLACE "jarvis-stats" with widget name, everywhere in the project
    // REPLACE the file name with the actual widget name
    return document.createElement('jarvis-stats-editor');
  }

  public static getStubConfig(): Record<string, unknown> {
    return {};
  }

  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private config!: BoilerplateCardConfig;

  public setConfig(config: BoilerplateCardConfig): void {
    // TODO Check for required fields and that they are of the proper format
    if (!config) {
      throw new Error('Invalid configuration');
    }

    if (config.test_gui) {
      getLovelace().setEditMode(true);
    }

    this.config = {
      name: 'Boilerplate',
      ...config,
    };
  }

  protected shouldUpdate(changedProps: PropertyValues): boolean {
    if (!this.config) {
      return false;
    }

    return hasConfigOrEntityChanged(this, changedProps, false);
  }

  private _handleAction(ev: ActionHandlerEvent): void {
    if (this.hass && this.config && ev.detail.action) {
      handleAction(this, this.hass, this.config, ev.detail.action);
    }
  }

  private _showWarning(warning: string): TemplateResult {
    return html`
      <hui-warning>${warning}</hui-warning>
    `;
  }

  private _showError(error: string): TemplateResult {
    const errorCard = document.createElement('hui-error-card');
    errorCard.setConfig({
      type: 'error',
      error,
      origConfig: this.config,
    });

    return html`
      ${errorCard}
    `;
  }

  static get styles(): CSSResultGroup {
    return css`
      /* REPLACE "jarvis-stats" with actual widget name */
      .type-custom-jarvis-stats {
        height: 100%;
        width: 100%;
      }
      .jarvis-widget {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        box-sizing: border-box;
      }
      .jarvis-stat-wrapper {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
      }
      .jarvis-outside, .jarvis-mid, .jarvis-inside {
        position: absolute;
        width: 100%;
        padding: 20px;
        box-sizing: border-box;
      }
      .jarvis-mid {
        padding: 60px;
      }
      .jarvis-inside {
        padding: 75px;
      }
      .jarvis-inside > img {
        animation: innerspin 60s linear infinite;
      }
      .jarvis-outside > img {
        animation: outterspin 180s linear infinite;
      }
      .jarvis-stats-values {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding-bottom: 40%;
        box-sizing: border-box;
      }
      .jarvis-stats-values .jarvis-stats-balance {
        color: #49aae3;
        font-size: 1.5em;
        margin-bottom: 5px;
      }
      .jarvis-stats-values .jarvis-stats-consumption {
        font-size: 2em;
        font-weight: 600;        
      }
      .jarvis-stats-values .jarvis-stats-temperature {    
        margin-top: 5px;
        opacity: .5;
        font-size: 1.5em;
      }

      @keyframes innerspin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
      @keyframes outterspin { 100% { -webkit-transform: rotate(-360deg); transform:rotate(-360deg); } }
    `;
  }

  protected render(): TemplateResult | void {
    /*
      ## INTERFACE
      - this.hass: A lot of information about everything in HA, such as states, theme, etc. The source of the tree
        - states: States of each of the components available
      - this.config: Lovelace settings for this instance

      Example: this.hass.states[this.config.entities[0]] shows the state of the first component
     */

    // TODO Check for stateObj or other necessary things and render a warning if missing
    if (this.config.show_warning) {
      return this._showWarning('warning message');
    }

    if (this.config.show_error) {
      return this._showError('error message');
    }

    return html`
      <ha-card
        @action=${this._handleAction}
        .actionHandler=${actionHandler({
          hasHold: hasAction(this.config.hold_action),
          hasDoubleClick: hasAction(this.config.double_tap_action),
        })}
        tabindex="0"
      >
        <div class='jarvis-widget'>
          <div class="jarvis-stat-wrapper">
            <div class="jarvis-outside">
              <img src="/local/jarvis/assets/jarvis_outside.svg" />
            </div>
            <div class="jarvis-mid">
              <img src="/local/jarvis/assets/jarvis_mid.svg" />
            </div>
            <div class="jarvis-inside">
              <img src="/local/jarvis/assets/jarvis_inside.svg" />
            </div>
            <div class="jarvis-stats-values">
              <div class="jarvis-stats-balance">+2.1W</div>
              <div class="jarvis-stats-consumption">47.0W</div>
              <div class="jarvis-stats-temperature">21ºC</div>
            </div>
          </div>  
        </div>
      </ha-card>
    `;
  }
}

customElements.define("jarvis-stats", BoilerplateCard);
