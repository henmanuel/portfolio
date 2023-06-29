import React from 'react';

const MailchimpForm = ({ form }) => {
    const labelStyles = {
        fontWeight: 'normal',
    };

    const inputStyles = {
        display: 'inline',
        width: 'auto',
    };

    const errorResponseStyles = {
        display: 'none',
    };

    const successResponseStyles = {
        display: 'none',
    };

    return (
        <div id="mc_embed_shell">
            <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
            <div id="mc_embed_signup">
                <form
                    ref={form}
                    action="https://henmanuel.us21.list-manage.com/subscribe/post?u=44cab78f72330593e7fa3daf7&amp;id=80d8e0f76a&amp;f_id=009cd5e6f0"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    className="validate"
                    target="_self"
                    noValidate
                >
                    <div id="mc_embed_signup_scroll">
                        <div className="indicates-required">
                            <span className="asterisk">*</span> indicates required
                        </div>
                        <div className="mc-field-group">
                            <label htmlFor="mce-FNAME" style={labelStyles}>
                                Name <span className="asterisk">*</span>
                            </label>
                            <input
                                type="text"
                                name="FNAME"
                                className="required text"
                                id="mce-FNAME"
                                required
                                defaultValue=""
                                style={inputStyles}
                            />
                        </div>
                        <div className="mc-field-group">
                            <label htmlFor="mce-EMAIL" style={labelStyles}>
                                Email Address <span className="asterisk">*</span>
                            </label>
                            <input
                                type="email"
                                name="EMAIL"
                                className="required email"
                                id="mce-EMAIL"
                                required
                                defaultValue=""
                                style={inputStyles}
                            />
                        </div>
                        <div id="mce-responses" className="clear foot">
                            <div className="response" id="mce-error-response" style={errorResponseStyles}></div>
                            <div className="response" id="mce-success-response" style={successResponseStyles}></div>
                        </div>
                        <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                            <input type="text" name="b_44cab78f72330593e7fa3daf7_80d8e0f76a" tabIndex="-1" defaultValue="" />
                        </div>
                        <div className="optionalParent">
                            <div className="clear foot">
                                <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe" />
                                <p className="brandingLogo" style={{ margin: '0px auto' }}>
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
