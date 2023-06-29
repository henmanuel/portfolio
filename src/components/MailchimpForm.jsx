import React from 'react';

const MailchimpForm = () => {
    const formStyles = {
        background: '#fff',
        clear: 'left',
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontSize: '14px',
        width: '300px',
    };

    const labelStyles = {
        fontWeight: 'normal',
        color: '#fff',
    };

    const inputStyles = {
        display: 'inline',
        width: 'auto',
        marginRight: '10px',
        color: '#fff',
    };

    const errorResponseStyles = {
        display: 'none',
        color: '#fff',
    };

    const successResponseStyles = {
        display: 'none',
        color: '#fff',
    };

    const channelsStyles = {
        display: 'flex',
        width: 'auto'
    };

    const hiddenInputStyles = {
        position: 'absolute',
        left: '-5000px',
        color: '#fff',
    };

    const submitStyles = {
        margin: '0px auto',
        color: '#fff',
    };

    return (
        <div id="mc_embed_shell">
            <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
            <div id="mc_embed_signup">
                <form
                    action="https://henmanuel.us21.list-manage.com/subscribe/post?u=44cab78f72330593e7fa3daf7&amp;id=80d8e0f76a&amp;v_id=111&amp;f_id=009cd5e6f0"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    className="validate"
                    target="_self"
                    noValidate
                >
                    <div id="mc_embed_signup_scroll">
                        <h2 style={{ color: '#fff' }}>Suscribirse</h2>
                        <div className="indicates-required" style={{ color: '#fff' }}>
                            <span className="asterisk">*</span> indica campos obligatorios
                        </div>
                        <div className="mc-field-group">
                            <label htmlFor="mce-FNAME" style={labelStyles}>
                                Nombre <span className="asterisk">*</span>
                            </label>
                            <input type="text" name="FNAME" className="required text" id="mce-FNAME" required value="" style={inputStyles} />
                        </div>
                        <div className="mc-field-group">
                            <label htmlFor="mce-EMAIL" style={labelStyles}>
                                Dirección de correo electrónico <span className="asterisk">*</span>
                            </label>
                            <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required value="" style={inputStyles} />
                        </div>
                        <div className="mc-field-group">
                            <label htmlFor="mce-PHONE" style={labelStyles}>
                                Whatsapp
                            </label>
                            <input type="text" name="PHONE" className="REQ_CSS" id="mce-PHONE" value="" style={inputStyles} />
                        </div>
                        <div id="mergeRow-gdpr" className="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group">
                            <div className="content__gdpr">
                                <label style={{ color: '#fff' }}>Permisos de Marketing</label>
                                <p style={{ color: '#fff' }}>
                                    Por favor, selecciona todas las formas en las que te gustaría recibir noticias de HenmaScript:
                                </p>
                                <fieldset className="mc_fieldset gdprRequired mc-field-group" name="interestgroup_field">
                                    <label className="checkbox subfield" htmlFor="gdpr1260" style={channelsStyles}>
                                        <input type="checkbox" id="gdpr_1260" name="gdpr[1260]" className="gdpr" value="Y" style={channelsStyles}/>
                                        <span style={{ color: '#fff' }}>Email</span>
                                    </label>
                                    <label className="checkbox subfield" htmlFor="gdpr1261" style={channelsStyles}>
                                        <input type="checkbox" id="gdpr_1261" name="gdpr[1261]" className="gdpr" value="Y" style={channelsStyles}/>
                                        <span style={{ color: '#fff' }}>Whatsapp</span>
                                    </label>
                                </fieldset>
                                <p style={{ color: '#fff' }}>
                                    Puedes cancelar la suscripción en cualquier momento haciendo clic en el enlace ubicado en el pie de
                                    página de nuestros correos electrónicos. Para obtener más información sobre nuestras prácticas de
                                    privacidad, visita nuestro sitio web.
                                </p>
                            </div>
                            <div className="content__gdprLegal">
                                <p style={{ color: '#fff' }}>
                                    Utilizamos Mailchimp como plataforma de marketing. Al hacer clic a continuación para suscribirte,
                                    reconoces que tu información se transferirá a Mailchimp para su procesamiento.{' '}
                                    <a href="https://mailchimp.com/legal/terms" target="_blank">
                                        Obtén más información sobre las prácticas de privacidad de Mailchimp aquí.
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div id="mce-responses" className="clear foot">
                            <div className="response" id="mce-error-response" style={errorResponseStyles}></div>
                            <div className="response" id="mce-success-response" style={successResponseStyles}></div>
                        </div>
                        <div aria-hidden="true" style={hiddenInputStyles}>
                            <input type="text" name="b_44cab78f72330593e7fa3daf7_80d8e0f76a" tabIndex="-1" value="" />
                        </div>
                        <div className="optionalParent">
                            <div className="clear foot">
                                <input
                                    type="submit"
                                    name="subscribe"
                                    id="mc-embedded-subscribe"
                                    className="button"
                                    value="Suscribirse"
                                    style={submitStyles}
                                />
                                <p className="brandingLogo" style={submitStyles}>
                                    <a href="http://eepurl.com/iuAjvY" title="Mailchimp - email marketing made easy and fun">
                                        <img
                                            src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"
                                            alt="referral badge"
                                        />
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MailchimpForm;
