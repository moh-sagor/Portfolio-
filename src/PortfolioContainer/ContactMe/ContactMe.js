import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactMe.css";

export default function ConnectMe() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_jhdd6oa",
                "template_zdka6oj",
                form.current,
                "WqZRmotqM2PkAjVF9"
            )
            .then(
                (result) => {
                    alert(result.text)

                },
                (error) => {
                    alert(error.text);
                }
            );
        e.target.reset();
    };

    return (
        <div className="container">
            <h1 style={{ textAlign: "center", fontFamily: "PoppinsSemiBold" }}>
                Get in Touch
            </h1>
            <div className="form-style-3">
                <form onSubmit={sendEmail} ref={form}>
                    <fieldset>
                        <legend>Personal</legend>
                        <label for="name">
                            <span>
                                Name <span className="required">*</span>
                            </span>
                            <input type="text" className="input-field" name="name" />
                        </label>
                        <label for="email">
                            <span>
                                Email <span className="required">*</span>
                            </span>
                            <input type="email" className="input-field" name="email" />
                        </label>
                        <label for="phone">
                            <span>
                                Phone <span className="required">*</span>
                            </span>
                            <input type="text" className="input-field" name="phone" />
                        </label>
                        <label for="subject">
                            <span>Subject</span>
                            <select name="subject" className="select-field">
                                <option value="Appointment">Appointment</option>
                                <option value="Interview">Interview</option>
                                <option value="Regarding a post">Regarding a post</option>
                            </select>
                        </label>
                    </fieldset>
                    <fieldset>
                        <legend>Message</legend>
                        <label for="message">
                            <span>
                                Message <span className="required">*</span>
                            </span>
                            <textarea name="message" className="textarea-field"></textarea>
                        </label>
                        <label>
                            <span> </span>
                            <input type="submit" value="Submit" />
                        </label>
                    </fieldset>
                </form>
            </div>
        </div>
    );
}
