/* eslint-disable import/no-nodejs-modules */
import React, { Fragment } from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import { useCssHandles } from 'vtex.css-handles'
import Countdown from 'react-countdown'
import { Button } from 'vtex.styleguide'
import marked from 'marked'
import { useDevice } from 'vtex.device-detector'
import { CountdownRibbonProps } from './typings/global'

//Declare Handles for the react component to be accesible
const CSS_HANDLES = [
  'container',
  'text',
  'countdown',
  'button',
  'container_mobile',
  'text_mobile',
  'countdown_mobile',
  'button_mobile',
] as const

const CountdownRibbon: StorefrontFunctionComponent<CountdownRibbonProps> = ({
  intl,
  dueDateTime = Date.now() + 10000000,
  active = true,
  text = intl.formatMessage({ id: 'store/countdown-ribbon.default.text' }),
  buttonURI = intl.formatMessage({
    id: 'store/countdown-ribbon.default.buttonPath',
  }),
  buttonText = intl.formatMessage({
    id: 'store/countdown-ribbon.default.buttonText',
  }),
}) => {
  const handles = useCssHandles(CSS_HANDLES)

  const { isMobile } = useDevice()

  if (!dueDateTime || !active || !text) return null

  const dateTime = new Date(dueDateTime)

  return (
    <Fragment>
      {!isMobile ? (
        <div className={`${handles.container} dt dt--fixed bg-white`}>
          <div className="dt-row pv5">
            <div
              className={`${handles.text} dtc tc f3 pv4 w-20`}
              dangerouslySetInnerHTML={{ __html: marked(text) }}
            />
            <Countdown
              date={dateTime}
              renderer={props => {
                return (
                  <div className={`${handles.countdown} dtc tc pv4 w-80`}>
                    <div className="dt dt--row">
                      <div className="dtc tc ph2">
                        <div className="dt-row f6"><span className={`fw7`}>{props.days} </span> {intl.formatMessage({ id: 'store/countdown-ribbon.days' })}:</div>
                      </div>
                      <div className="dtc tc ph2">
                        <div className="dt-row f6"><span className={`fw7`}>{props.hours} </span> {intl.formatMessage({ id: 'store/countdown-ribbon.hours' })}:</div>
                      </div>
                      <div className="dtc tc ph2">
                        <div className="dt-row f6"><span className={`fw7`}>{props.minutes} </span> {intl.formatMessage({ id: 'store/countdown-ribbon.minutes' })}:</div>
                      </div>
                      <div className="dtc tc ph2">
                        <div className="dt-row f6"><span className={`fw7`}>{props.seconds} </span> {intl.formatMessage({ id: 'store/countdown-ribbon.seconds' })}</div>
                      </div>
                    </div>
                  </div>
                )
              }}
            />
            {/* <div className={`${handles.button} dtc tc pv4 w-20`}>
              <Button variation="primary" href={buttonURI}>
                {buttonText}
              </Button>
            </div> */}
          </div>
        </div>
      ) : (
          <div
            className={`${handles.container_mobile} dt dt--fixed pt4 ph4 bg-white`}
          >
            <Countdown
              date={dateTime}
              renderer={props => {
                return (
                  <div className={`${handles.countdown_mobile} dt-row`}>
                    <div className="dt dt--fixed">
                      <div className="dtc tc ph5">
                        <div className="dt-row f2">{props.days}</div>
                        <div className="dt-row">
                          {intl.formatMessage({
                            id: 'store/countdown-ribbon.days',
                          })}
                        </div>
                      </div>
                      <div className="dtc tc ph5">
                        <div className="dt-row f2">{props.hours}</div>
                        <div className="dt-row">
                          {intl.formatMessage({
                            id: 'store/countdown-ribbon.hours',
                          })}
                        </div>
                      </div>
                      <div className="dtc tc ph5">
                        <div className="dt-row f2">{props.minutes}</div>
                        <div className="dt-row">
                          {intl.formatMessage({
                            id: 'store/countdown-ribbon.minutes',
                          })}
                        </div>
                      </div>
                      <div className="dtc tc ph5">
                        <div className="dt-row f2">{props.seconds}</div>
                        <div className="dt-row">
                          {intl.formatMessage({
                            id: 'store/countdown-ribbon.seconds',
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }}
            />
            <div className="dt dt--fixed pt4">
              <div
                className={`${handles.text_mobile} dtc tc ph5`}
                dangerouslySetInnerHTML={{ __html: marked(text) }}
              />
              <div className={`${handles.button_mobile} dtc tc ph5`}>
                <Button variation="primary" href={buttonURI}>
                  {buttonText}
                </Button>
              </div>
            </div>
          </div>
        )}
    </Fragment>
  )
}

const messages = defineMessages({
  title: {
    id: 'admin/countdown-ribbon.name',
  },
  active: {
    id: 'admin/countdown-ribbon.properties.active',
  },
  dueDateTime: {
    id: 'admin/countdown-ribbon.properties.dueDateTime',
  },
  text: {
    id: 'admin/countdown-ribbon.properties.text',
  },
  buttonPath: {
    id: 'admin/countdown-ribbon.properties.button.path',
  },
  buttonText: {
    id: 'admin/countdown-ribbon.properties.button.text',
  },
  defaultText: {
    id: 'store/countdown-ribbon.default.text',
  },
  defaultButtonText: {
    id: 'store/countdown-ribbon.default.buttonText',
  },
  defaultButtonPath: {
    id: 'store/countdown-ribbon.default.buttonPath',
  },
})

//This is the schema form that will render the editable props on SiteEditor
CountdownRibbon.schema = {
  title: messages.title.id,
  type: 'object',
  properties: {
    active: {
      title: messages.active.id,
      type: 'boolean',
    },
    dueDateTime: {
      title: messages.dueDateTime.id,
      type: 'string',
      format: 'date-time',
    },
    text: {
      title: messages.text.id,
      type: 'string',
    },
    buttonURI: {
      title: messages.buttonPath.id,
      type: 'string',
      format: 'uri',
    },
    buttonText: {
      title: messages.buttonText.id,
      type: 'string',
    },
  },
}

export default injectIntl(CountdownRibbon)
