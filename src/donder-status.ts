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
  `%c  Donder Status \n%c  version: ${CARD_VERSION}  `,
  'color: orange; font-weight: bold; background: black',
  'color: white; font-weight: bold; background: dimgray',
);

(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'donder-status',
  name: 'Donder Status',
  description: 'A template custom card for you to create something awesome',
});

export class BoilerplateCard extends LitElement {
  public static async getConfigElement(): Promise<LovelaceCardEditor> {
    // REPLACE "donder-status" with widget name, everywhere in the project
    // REPLACE the file name with the actual widget name
    return document.createElement('donder-status-editor');
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

    return this.hasConfigOrEntityChanged(this, changedProps, false);
  }

  protected hasConfigOrEntityChanged(element: any, changedProps: PropertyValues, forceUpdate: boolean): boolean {
    if (changedProps.has('config') || forceUpdate) {
      return true;
    }
    if (element.config!.all_consumption_entities) {
      const oldHass = changedProps.get('hass') as HomeAssistant | undefined;
      if (oldHass) {
        if (element.config.all_consumption_entities) {
          let hasChanged = false
          for (let i=0; i<=element.config.all_consumption_entities.length-1; i++) {
            const entity = element.config.all_consumption_entities[i]
            if (oldHass.states[entity] !== element.hass!.states[entity]) {
              hasChanged = true
              break
            }
          }
          return hasChanged
        }
      }
      return true;
    } else {
      return false;
    }
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
      /* REPLACE "stats-widget" with actual widget name */
      .type-custom-stats-widget {
        height: 100%;
        width: 100%;
      }
      .donder-widget {
        background-color: transparent;
        color: var(--text-primary-color);
        /* padding: 15px 22px 22px; */
        box-sizing: border-box;
        text-align: center;
        border-radius: var(--ha-card-border-radius)
      }
      .donder-stat-wrapper {
        position: relative;
      }
      .donder-outside {
        width: 100%;
        padding: 20px;
        box-sizing: border-box;
      }
      .donder-mid, .donder-inside {
        position: absolute;
        width: 100%;
        top: 0px;
        box-sizing: border-box;
      }
      .donder-mid {
        padding: 60px;
      }
      .donder-inside {
        padding: 75px;
      }
      .donder-inside > img {
        animation: innerspin 60s linear infinite;
      }
      .donder-outside > img {
        animation: outterspin 180s linear infinite;
      }
      .donder-stats-values {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* padding-bottom: 40%; */
        box-sizing: border-box;
      }
      .donder-stats-values .donder-stats-balance {
        font-size: 1.5em;
        margin-bottom: 5px;
        color: #49aae3;
      }
      .donder-stats-values .donder-stats-balance.negative {
        color: red;
      }
      .donder-stats-values .donder-stats-balance.positive {
        color: #49aae3;
      }
      .donder-stats-values .donder-stats-consumption {
        font-size: 2em;
        font-weight: 600;        
      }
      .donder-stats-values .donder-stats-temperature {    
        margin-top: 5px;
        opacity: .5;
        font-size: 1.5em;
      }
      @media (max-width: 600px) {
        .donder-stats-values .donder-stats-balance,
        .donder-stats-values .donder-stats-consumption {
          font-size: 6vw;
        } 
      }

      @keyframes innerspin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
      @keyframes outterspin { 100% { -webkit-transform: rotate(-360deg); transform:rotate(-360deg); } }
    `;
  }

  protected calculateTotalConsumption = (entities) => {
    const consumption = {
      W: 0,
      kW: 0,
    }
    for (let i=0; i<= entities.length-1; i++) {
      const power = this.hass.states[entities[i]]?.state
      const unit = this.hass.states[entities[i]]?.attributes.unit_of_measurement as string
      
      if (power) {
        consumption[unit] += parseFloat(power)
      }
    }

    const totalConsumption = consumption.W + (consumption.kW / 1000)
    return totalConsumption    
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

    const generated = 0
    // consumption in wats
    const consumption = this.calculateTotalConsumption(this.config.all_consumption_entities)
    const delta = generated - consumption

    return html`
      <ha-card
        @action=${this._handleAction}
        .actionHandler=${actionHandler({
          hasHold: hasAction(this.config.hold_action),
          hasDoubleClick: hasAction(this.config.double_tap_action),
        })}
        tabindex="0" 
      >
        <div class='donder-widget'>
          <div class="donder-stat-wrapper">
            <div class="donder-outside">
              <img src="/local/donder/assets/jarvis_outside.svg" />
            </div>
            <div class="donder-mid">
              <img src="/local/donder/assets/jarvis_mid.svg" />
            </div>
            <div class="donder-inside">
              <img src="/local/donder/assets/jarvis_inside.svg" />
            </div>
            <div class="donder-stats-values">
              <div class=${"donder-stats-balance "+ (delta < 0 ? 'negative' : 'positive')}></0>${consumption >= 1000 ? `${(consumption/1000).toFixed(1)} kW` : `${consumption.toFixed(1)} W`}</div>
              <div class="donder-stats-consumption">${consumption >= 1000 ? `${(consumption/1000).toFixed(1)} kW` : `${consumption.toFixed(1)} W`}</div>
            </div>
          </div>  
        </div>
      </ha-card>
    `;
  }
}

customElements.define("donder-status", BoilerplateCard);
