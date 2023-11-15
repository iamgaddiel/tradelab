import React, { useEffect, useState } from 'react';
import { IonAvatar, IonButton, IonCheckbox, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonList, IonModal, IonPage, IonRadio, IonRadioGroup, IonRow, IonSegment, IonSegmentButton, IonText, IonThumbnail, IonTitle, IonToggle, IonToolbar } from '@ionic/react';
import { useRecoilState } from 'recoil';
import { utilsAtom } from '../../atoms/utilityAtom';

import style from './Trade.module.css'
import { arrowDownCircle, arrowDownOutline, arrowUpOutline, caretUp, chevronBack, chevronForward, close, help, helpOutline, radioButtonOff, timeOutline } from 'ionicons/icons';

import Flag from '../../assets/images/united-states-of-america.png'
import SoundWave from '../../assets/images/music.png'
import TradingImg from '../../assets/images/25694859_sl_022321_41020_03 (1).jpg'
import PronImg from '../../assets/images/porn.png'
import RookImg from '../../assets/images/rook.png'
import KnightImg from '../../assets/images/knight.png'
import KingImg from '../../assets/images/knight.png'



const Trade: React.FC = () => {
  const [showTabs, setTab] = useRecoilState(utilsAtom);

  const [openTimeModal, setOpenTimeModal] = useState(false)
  const [timeValue, setTimeValue] = useState('5 min')


  const [openTradingAssetModal, setTradingAssetModal] = useState(false)
  const [openTechnicalModal, setOpenTechnicalModal] = useState(false)
  const [openStrategyModal, setOpenStrategylModal] = useState(false)

  const [showIndicatorDetailModal, setShowIndicatorDetailModal] = useState(false)
  const [showIndicatorEditModal, setShowIndicatorEditModal] = useState(false)




  useEffect(() => {
    setTab({
      ...showTabs,
      showTabs: true
    });
  }, []);



  return (

    <IonPage>
      <IonContent className='ion-padding'>
        {/* Account Selection Section */}
        <section >
          <small>Account Selection</small>
          <IonSegment mode='ios' className='mt-2'>
            <IonSegmentButton className='p-2 ion-text-'>
              <small>Demo Account</small>
              US$10,000
            </IonSegmentButton>
            <IonSegmentButton>
              <small>Real Account</small>
              US$10,000
            </IonSegmentButton>
          </IonSegment>
        </section>

        {/* Main Options */}
        <section className='mt-3'>
          <IonGrid>
            <IonRow>
              <IonCol size='12'>
                <span>Main Options</span>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size='7' sizeMd='7' sizeLg='8'>
                <IonInput
                  type={'text'}
                  label='Amount'
                  labelPlacement='stacked'
                  placeholder='$10'
                  className={`${style.grey_form_input}`} />
              </IonCol>
              <IonCol size='5' sizeMd='auto' sizeLg='4'>
                <IonInput
                  type={'text'}
                  value={timeValue}
                  label='Time'
                  labelPlacement='stacked'
                  placeholder='5 min'
                  className={`${style.grey_form_input}`}
                  readonly
                  onClick={() => setOpenTimeModal(true)}
                />
              </IonCol>
            </IonRow>
          </IonGrid>
        </section>

        {/* Trading asset */}
        <section className='mt-3'>
          <small>Trading assets</small>
          <IonGrid className={`${style.grey_form_input} mt-2`} onClick={() => setTradingAssetModal(true)}>
            <IonRow className='ion-align-items-center'>
              <IonCol size='2'>
                <IonImg src={Flag} style={{ width: '20px' }} />
              </IonCol>
              <IonCol size='9'>
                <small>GBP/JPY <IonText color={'success'} className='ion-margin-start'>85%</IonText></small>
              </IonCol>
              <IonCol size='1'>
                <IonIcon icon={chevronForward} />
              </IonCol>

            </IonRow>
          </IonGrid>
        </section>

        {/* Technical Indicator */}
        <section className="mt-3">
          <small>Technical indicator </small>
          <IonGrid className={`${style.grey_form_input} mt-2`} onClick={() => setOpenTechnicalModal(true)}>
            <IonRow className='ion-align-items-center'>
              <IonCol size='2'>
                <IonThumbnail className='bg-dark p-2 rounded-2'>
                  <IonImg src={SoundWave} />
                </IonThumbnail>
              </IonCol>
              <IonCol size='9'>
                <strong>RSI</strong> <br />
                <IonText color={'medium'}>
                  <small>Speed and price movement indicator</small>
                </IonText>
              </IonCol>
              <IonCol size='1'>
                <IonIcon icon={chevronForward} />
              </IonCol>
            </IonRow>
          </IonGrid>
        </section>


        {/* Strategy */}
        <section className="mt-3">
          <IonGrid>
            <IonRow className='ion-justify-content-between'>
              <IonCol size='6' className='fw-bolder ion-text-start'>
                Risk Management
              </IonCol>
              <IonCol size='1' className='ion-text-end'>
                <IonIcon icon={helpOutline} />
              </IonCol>
            </IonRow>
          </IonGrid>

          <small>Strategy </small>
          <IonGrid className={`${style.grey_form_input} mt-2`} onClick={() => setOpenStrategylModal(true)}>
            <IonRow className=''>
              <IonCol size='2'>
                <IonThumbnail className=''>
                  <IonImg src={PronImg} />
                </IonThumbnail>
              </IonCol>
              <IonCol size='9'>
                <strong>Fixed amount</strong> <br />
                <IonText color={'tertiary'}>
                  <small className='d-flex align-items-center'>
                    <IonIcon icon={caretUp} color='tertiary' />
                    low risk
                  </small>
                </IonText>
                <IonText className='fs-6'><small>Recommended balance:</small></IonText> <br />
                <IonText><small>at least $50</small></IonText>
              </IonCol>
              <IonCol size='1'>
                <IonIcon icon={chevronForward} />
              </IonCol>
            </IonRow>
          </IonGrid>
        </section>




        {/* ----------------- [Modals] ------------------- */}

        {/* Time Modal */}
        <IonModal initialBreakpoint={.3} isOpen={openTimeModal} onDidDismiss={() => setOpenTimeModal(false)}>
          <IonHeader className='ion-no-border'>
            <IonToolbar className='ion-padding-horizontal'>
              <IonIcon icon={close} slot='start' />
              <IonTitle className='ion-text-center'>Time</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonList lines='none'>
              <IonRadioGroup value={'5 min'}>
                <IonItem>
                  <IonIcon icon={timeOutline} color={'secondary'} />
                  <IonText className='ion-margin-start'>1 min</IonText>
                  <IonRadio value={'1 min'} mode='ios' slot='end' color={'secondary'} onClick={(e) => setTimeValue('1 min')} />
                </IonItem>
                <IonItem>
                  <IonIcon icon={timeOutline} color={'secondary'} />
                  <IonText className='ion-margin-start'>5 min</IonText>
                  <IonRadio value={'5 min'} mode='ios' slot='end' color={'secondary'} onClick={() => setTimeValue('5 min')} />
                </IonItem>
                <IonItem>
                  <IonIcon icon={timeOutline} color={'secondary'} />
                  <IonText className='ion-margin-start'>15 min</IonText>
                  <IonRadio value={'15 min'} mode='ios' slot='end' color={'secondary'} onClick={() => setTimeValue('15 min')} />
                </IonItem>
              </IonRadioGroup>
            </IonList>
          </IonContent>
        </IonModal>

        {/* Trading Asset Modal */}
        <IonModal initialBreakpoint={1} isOpen={openTradingAssetModal} onDidDismiss={() => setTradingAssetModal(false)}>
          <IonHeader className='ion-no-border'>
            <IonToolbar className='ion-padding-horizontal'>
              <IonIcon icon={close} slot='start' onClick={() => setTradingAssetModal(false)} />
              <IonTitle className='ion-text-center'>Trading asset</IonTitle>
            </IonToolbar>
            <IonToolbar>
              <IonItem>
                <IonLabel>
                  Auto Selection
                  <p>
                    <small>chooses the asset with the highest percentage of profit</small>
                  </p>
                </IonLabel>
                <IonToggle slot='end' color={'success'} />
              </IonItem>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonList lines='none'>
              <IonRadioGroup >
                <IonItem>
                  <IonImg src={Flag} style={{ width: '20px' }} slot='start' />
                  <IonLabel>
                    <IonText className='ion-margin-start'><small>GBP/JPY </small></IonText>
                  </IonLabel>
                  <IonText slot='end'>
                    <IonText color={'success'}>85%</IonText>
                    <IonText color={'success'} className='ion-margin-start'>85%</IonText>
                  </IonText>
                  <IonRadio value={'1 min'} mode='ios' slot='end' color={'secondary'} onClick={(e) => setTimeValue('1 min')} style={{ opacity: 0, display: 'none' }} />
                </IonItem>
              </IonRadioGroup>
            </IonList>
          </IonContent>
        </IonModal>

        {/* Indicator selection modal */}
        <IonModal initialBreakpoint={1} isOpen={openTechnicalModal} onDidDismiss={() => setOpenTechnicalModal(false)}>
          <IonHeader className='ion-no-border'>
            <IonToolbar className='ion-padding-horizontal'>
              <IonIcon icon={close} slot='start' onClick={() => setOpenTechnicalModal(false)} />
              <IonTitle className='ion-text-center'>Indicator selection</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className='ion-padding ion-margin-bottom'>

            {/* MACD indicator */}
            <div className={`${style.grey_form_input} rounded-4`}>
              <IonGrid>
                {/* Text */}
                <IonRow>
                  <IonCol size='2'>
                    <IonThumbnail className='bg-dark p-2 rounded-2'>
                      <IonImg src={SoundWave} />
                    </IonThumbnail>
                  </IonCol>
                  <IonCol size='9'>
                    <h6 className='ion-no-margin'>MACD</h6>
                    <IonText color={'medium'}>
                      <small>Trend tracing with moving average</small>
                    </IonText>
                    <div className="d-flex align-items-center justify-content-between w-50">
                      <span className='d-flex align-items-center'>
                        <div style={{ width: '15px', height: '15px', background: 'blue' }} className='rounded-circle'></div>
                        <small className='ms-1' style={{ color: 'blue' }}>12/20</small>
                      </span>
                      <span className='d-flex align-items-center ion-margin-horizontal'>
                        <div style={{ width: '15px', height: '15px', background: 'orange' }} className='rounded-circle'></div>
                        <small className='ms-1' style={{ color: 'orange' }}>1</small>
                      </span>
                      <span className='d-flex align-items-center'>
                        <div style={{ width: '15px', height: '15px', background: 'grey' }} className='rounded-circle'></div>
                      </span>
                    </div>
                  </IonCol>
                  <IonCol size='1' className='ion-justify-self-end'>
                    <IonIcon icon={radioButtonOff} color={'medium'} size='default' />
                  </IonCol>
                </IonRow>

                {/* Buttons */}
                <IonRow className='ion-justify-content-center'>
                  <IonCol size='6'>
                    <IonButton color={'secondary'} expand='block' mode='ios' onClick={() => setShowIndicatorDetailModal(true)}>
                      <IonText color={'light'}>Show details</IonText>
                    </IonButton>
                  </IonCol>
                  <IonCol size='6'>
                    <IonButton color={'secondary'} expand='block' mode='ios' onClick={() => setShowIndicatorEditModal(true)}>
                      <IonText color={'light'}>Edit</IonText>
                    </IonButton>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </div>

            {/* Stochastic indicator */}
            <div className={`${style.grey_form_input} rounded-4 mt-3`}>
              <IonGrid>
                {/* Text */}
                <IonRow>
                  <IonCol size='2'>
                    <IonThumbnail className='bg-dark p-2 rounded-2'>
                      <IonImg src={SoundWave} />
                    </IonThumbnail>
                  </IonCol>
                  <IonCol size='9'>
                    <h6 className='ion-no-margin'>Stochastic</h6>
                    <IonText color={'medium'}>
                      <small>Difference of highs and lows with the current position</small>
                    </IonText>
                    <div className="d-flex align-items-center justify-content-between w-50">
                      <span className='d-flex align-items-center'>
                        <div style={{ width: '15px', height: '15px', background: 'green' }} className='rounded-circle'></div>
                        <small className='ms-1' style={{ color: 'green' }}>12</small>
                      </span>
                      <span className='d-flex align-items-center ion-margin-horizontal'>
                        <div style={{ width: '15px', height: '15px', background: 'red' }} className='rounded-circle'></div>
                        <small className='ms-1' style={{ color: 'red' }}>3</small>
                      </span>
                      <span className='d-flex align-items-center'>
                        <div style={{ width: '15px', height: '15px', background: 'grey' }} className='rounded-circle'></div>
                        <small className='ms-1' style={{ color: 'grey' }}>3</small>
                      </span>
                    </div>
                  </IonCol>
                  <IonCol size='1' className='ion-justify-self-end'>
                    <IonIcon icon={radioButtonOff} color={'medium'} size='default' />
                  </IonCol>
                </IonRow>

                {/* Buttons */}
                <IonRow className='ion-justify-content-center'>
                  <IonCol size='6'>
                    <IonButton color={'secondary'} expand='block' mode='ios' >
                      <IonText color={'light'}>Show details</IonText>
                    </IonButton>
                  </IonCol>
                  <IonCol size='6'>
                    <IonButton color={'secondary'} expand='block' mode='ios' >
                      <IonText color={'light'}>Edit</IonText>
                    </IonButton>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </div>

            {/* Bollinger Bands indicator */}
            <div className={`${style.grey_form_input} rounded-4 mt-3`}>
              <IonGrid>
                {/* Text */}
                <IonRow>
                  <IonCol size='2'>
                    <IonThumbnail className='bg-dark p-2 rounded-2'>
                      <IonImg src={SoundWave} />
                    </IonThumbnail>
                  </IonCol>
                  <IonCol size='9'>
                    <h6 className='ion-no-margin'>Bollinger</h6>
                    <IonText color={'medium'}>
                      <small>Calculates based on the standard deviation of a moving average</small>
                    </IonText>
                    <div className="d-flex align-items-center justify-content-between w-50">
                      <span className='d-flex align-items-center'>
                        <div style={{ width: '15px', height: '15px', background: 'orange' }} className='rounded-circle'></div>
                        <small className='ms-1' style={{ color: 'orange' }}>12</small>
                      </span>
                      <span className='d-flex align-items-center ion-margin-horizontal'>
                        <div style={{ width: '15px', height: '15px', background: 'yellowgreen' }} className='rounded-circle'></div>
                        <small className='ms-1' style={{ color: 'yellowgreen' }}>3</small>
                      </span>
                    </div>
                  </IonCol>
                  <IonCol size='1' className='ion-justify-self-end'>
                    <IonIcon icon={radioButtonOff} color={'medium'} size='default' />
                  </IonCol>
                </IonRow>

                {/* Buttons */}
                <IonRow className='ion-justify-content-center'>
                  <IonCol size='6'>
                    <IonButton color={'secondary'} expand='block' mode='ios' >
                      <IonText color={'light'}>Show details</IonText>
                    </IonButton>
                  </IonCol>
                  <IonCol size='6'>
                    <IonButton color={'secondary'} expand='block' mode='ios' >
                      <IonText color={'light'}>Edit</IonText>
                    </IonButton>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </div>

            {/* RSI indicator */}
            <div className={`${style.grey_form_input} rounded-4 mt-3`}>
              <IonGrid>
                {/* Text */}
                <IonRow>
                  <IonCol size='2'>
                    <IonThumbnail className='bg-dark p-2 rounded-2'>
                      <IonImg src={SoundWave} />
                    </IonThumbnail>
                  </IonCol>
                  <IonCol size='9'>
                    <h6 className='ion-no-margin'>RSI</h6>
                    <IonText color={'medium'}>
                      <small>Spend and price movement indicator</small>
                    </IonText>
                    <div className="d-flex align-items-center">
                      <span className='d-flex align-items-center'>
                        <div style={{ width: '15px', height: '15px', background: 'purple' }} className='rounded-circle'></div>
                        <small className='ms-2' style={{ color: 'purple' }}>20</small>
                      </span>
                    </div>
                  </IonCol>
                  <IonCol size='1' className='ion-justify-self-end'>
                    <IonIcon icon={radioButtonOff} color={'medium'} size='default' />
                  </IonCol>
                </IonRow>

                {/* Buttons */}
                <IonRow className='ion-justify-content-center'>
                  <IonCol size='6'>
                    <IonButton color={'secondary'} expand='block' mode='ios' >
                      <IonText color={'light'}>Show details</IonText>
                    </IonButton>
                  </IonCol>
                  <IonCol size='6'>
                    <IonButton color={'secondary'} expand='block' mode='ios' >
                      <IonText color={'light'}>Edit</IonText>
                    </IonButton>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </div>

            {/* CCI indicator */}
            <div className={`${style.grey_form_input} rounded-4 mt-3`}>
              <IonGrid>
                {/* Text */}
                <IonRow>
                  <IonCol size='2'>
                    <IonThumbnail className='bg-dark p-2 rounded-2'>
                      <IonImg src={SoundWave} />
                    </IonThumbnail>
                  </IonCol>
                  <IonCol size='9'>
                    <h6 className='ion-no-margin'>CCI</h6>
                    <IonText color={'medium'}>
                      <small>Measures the deviation of hte price from the average</small>
                    </IonText>
                    <div className="d-flex align-items-center">
                      <span className='d-flex align-items-center'>
                        <div style={{ width: '15px', height: '15px', background: 'aquamarine' }} className='rounded-circle'></div>
                        <small className='ms-2' style={{ color: 'aquamarine' }}>20</small>
                      </span>
                    </div>
                  </IonCol>
                  <IonCol size='1' className='ion-justify-self-end'>
                    <IonIcon icon={radioButtonOff} color={'medium'} size='default' />
                  </IonCol>
                </IonRow>

                {/* Buttons */}
                <IonRow className='ion-justify-content-center'>
                  <IonCol size='6'>
                    <IonButton color={'secondary'} expand='block' mode='ios' >
                      <IonText color={'light'}>Show details</IonText>
                    </IonButton>
                  </IonCol>
                  <IonCol size='6'>
                    <IonButton color={'secondary'} expand='block' mode='ios' >
                      <IonText color={'light'}>Edit</IonText>
                    </IonButton>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </div>

            {/* Close price indicator */}
            <div className={`${style.grey_form_input} rounded-4 mt-3`}>
              <IonGrid>
                {/* Text */}
                <IonRow>
                  <IonCol size='2'>
                    <IonThumbnail className='bg-dark p-2 rounded-2'>
                      <IonImg src={SoundWave} />
                    </IonThumbnail>
                  </IonCol>
                  <IonCol size='9'>
                    <h6 className='ion-no-margin'>Close price</h6>
                    <IonText color={'medium'}>
                      <small>Candlestick trend tracing indicator</small>
                    </IonText>
                  </IonCol>
                  <IonCol size='1' className='ion-justify-self-end'>
                    <IonIcon icon={radioButtonOff} color={'medium'} size='default' />
                  </IonCol>
                </IonRow>

                {/* Buttons */}
                <IonRow className='ion-justify-content-center'>
                  <IonCol size='12'>
                    <IonButton color={'secondary'} expand='block' mode='ios' >
                      <IonText color={'light'}>Show details</IonText>
                    </IonButton>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </div>

          </IonContent>
        </IonModal>

        {/* Strategy Selection Modal */}
        <IonModal initialBreakpoint={1} isOpen={openTechnicalModal} onDidDismiss={() => setOpenTechnicalModal(false)}>
          
        </IonModal>






        {/* ----------------- [Indicator Detail Modals] ------------------- */}
        {/* Create component */}
        <IonModal initialBreakpoint={.8} isOpen={showIndicatorDetailModal} onDidDismiss={() => setShowIndicatorDetailModal(false)}>
          <IonHeader className='ion-no-border ion-padding'>
            <IonToolbar>
              <IonRow>
                <IonCol size='2'>
                  <IonThumbnail className='bg-dark p-2 rounded-2'>
                    <IonImg src={SoundWave} />
                  </IonThumbnail>
                </IonCol>
                <IonCol size='auto'>
                  <h6 className='ion-no-margin'>MACD</h6>
                  <IonText color={'medium'}>
                    <small>Trending</small>
                  </IonText>
                </IonCol>
              </IonRow>
            </IonToolbar>
          </IonHeader>

          <IonContent className=''>
            <IonGrid className='ion-padding-horizontal'>
              <IonRow>
                <IonCol size='12' sizeMd='12' sizeLg='12'>
                  <IonImg src={TradingImg} />
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size='12' sizeMd='12' sizeLg='12'>
                  <p>
                    <small>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam necessitatibus minima repudiandae. Natus similique voluptas vitae, doloribus dicta cum animi.z</small>
                  </p>
                </IonCol>
              </IonRow>
            </IonGrid>

            {/* TODO: correct this to show at the bottom of the modal */}
            <IonButton expand={'block'} color={'secondary'} mode='ios'>
              <IonText color={'light'}>Select</IonText>
            </IonButton>
          </IonContent>
        </IonModal>





        {/* ----------------- [Indicator Edit Modals] ------------------- */}
        <IonModal initialBreakpoint={.7} isOpen={showIndicatorEditModal} onDidDismiss={() => setShowIndicatorEditModal(false)}>
          <IonHeader className='ion-no-border'>
            <IonToolbar>
              <IonIcon icon={chevronBack} size='large' slot='start' onClick={() => setShowIndicatorEditModal(false)} />
              <IonTitle>MACD settings </IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <form action="">

              <section className={`${style.grey_form_input} rounded-3 mt-2`}>
                <IonGrid>
                  <IonRow className='ion-justify-content-between'>
                    <IonCol size='3' sizeMd='3'>
                      <p>MACD line</p>
                    </IonCol>
                    <IonCol size='2' sizeMd='2'>
                      <div style={{ width: '15px', height: '15px', background: 'grey' }} className='rounded-circle'></div>
                    </IonCol>
                  </IonRow>

                  {/* Inputs */}
                  <IonRow className={`${style.input_wrapper} ion-align-items-center ion-justify-content-evenly`}>
                    <IonCol size='2' className='ion-text-center'>
                      <IonIcon icon={arrowDownOutline} />
                    </IonCol>
                    <IonCol size='6'>
                      <div className={`${style.value_section}`}>0</div>
                    </IonCol>
                    <IonCol size='2' className='ion-text-center'>
                      <IonIcon icon={arrowUpOutline} />
                    </IonCol>
                  </IonRow>
                  <IonRow className={`${style.input_wrapper} ion-align-items-center ion-justify-content-evenly mt-3`}>
                    <IonCol size='2' className='ion-text-center'>
                      <IonIcon icon={arrowDownOutline} />
                    </IonCol>
                    <IonCol size='6'>
                      <div className={`${style.value_section}`}>0</div>
                    </IonCol>
                    <IonCol size='2' className='ion-text-center'>
                      <IonIcon icon={arrowUpOutline} />
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </section>

              <section className={`${style.grey_form_input} rounded-3 mt-2`}>
                <IonGrid>
                  <IonRow className='ion-justify-content-between'>
                    <IonCol size='3' sizeMd='3'>
                      <p>Signal</p>
                    </IonCol>
                    <IonCol size='2' sizeMd='2'>
                      <div style={{ width: '15px', height: '15px', background: 'grey' }} className='rounded-circle'></div>
                    </IonCol>
                  </IonRow>

                  {/* Inputs */}
                  <IonRow className={`${style.input_wrapper} ion-align-items-center ion-justify-content-evenly`}>
                    <IonCol size='2' className='ion-text-center'>
                      <IonIcon icon={arrowDownOutline} />
                    </IonCol>
                    <IonCol size='6'>
                      <div className={`${style.value_section}`}>0</div>
                    </IonCol>
                    <IonCol size='2' className='ion-text-center'>
                      <IonIcon icon={arrowUpOutline} />
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </section>


              <section className={`${style.grey_form_input} rounded-3 mt-2`}>
                <IonGrid>
                  <IonRow className='ion-justify-content-between'>
                    <IonCol size='3' sizeMd='3'>
                      <p>Histogram</p>
                    </IonCol>
                    <IonCol size='2' sizeMd='2'>
                      <div style={{ width: '15px', height: '15px', background: 'grey' }} className='rounded-circle'></div>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </section>

              <IonGrid>
                <IonRow className='ion-justify-content-center'>
                  <IonCol size='6'>
                    <IonButton color={'medium'} expand='block' mode='ios' >
                      <IonText color={'light'}>Reset</IonText>
                    </IonButton>
                  </IonCol>
                  <IonCol size='6'>
                    <IonButton color={'secondary'} expand='block' mode='ios' >
                      <IonText color={'light'}>Save</IonText>
                    </IonButton>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </form>
          </IonContent>
        </IonModal>






      </IonContent>
      <IonFooter className='ion-no-header'>
        <IonButton expand={'block'} color={'secondary'} mode='ios'>
          <IonText color={'light'}>Start trading</IonText>
        </IonButton>
      </IonFooter>
    </IonPage>
  );
};





export default Trade;
