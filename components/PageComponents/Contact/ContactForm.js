import React from 'react';
import styled from 'styled-components';

export default function ContactForm() {
  return (
    <Div>
        <h2>Get In Touch</h2>
        <p>Contact us for more information.</p>
        <form>
            <div className='formFlexWrapper'>
                <span className='formControl'>
                    <label htmlFor="name" className="srOnly">Name</label>
                    <input type="text" name="name" id="name" placeholder="Your Name*" aria-required="true" />
                    <p className='errorMessage'>Your name is required.</p>
                </span>
                <span className='formControl'>
                    <label htmlFor="email" className="srOnly">Email</label>
                    <input type="email" name="email" id="email" placeholder="Your Email*" aria-required="true" />
                    <p className='errorMessage'>Your email address is required.</p>
                </span>
            </div>
            <span className='formControlReason'>
                    <label htmlFor="reason" className="reason">Reason For Contact</label>
                    <select id="reason" name="reason">
                        <option value="Merchant Services">Merchant Services</option>
                        <option value="Embedded Payments">Embedded Payments</option>
                        <option value="Embedded Banking">Embedded Banking</option>
                        <option value="Text Payment Technology">Text Payment Technology</option>
                        <option value="Sales">Sales</option>
                        <option value="Investor Relations">Investor Relations</option>
                        <option value="Partners">Partners</option>
                        <option value="Other">Other</option>
                    </select>
                </span>
                <span className='formControl'>
                    <button type='submit' className='btn btnDark center'>Submit Form</button>
                </span>
        </form>
    </Div>
  )
}

const Div = styled.div`
    width: 100%;
    max-width: ${props => props.theme.breakpoint.laptop}
    padding: 10px;
    display: flex;
    flex-direction: column;
    margin: auto;
    justify-content: center;
    text-align: center;
    margin-bottom: 50px;

    form {
        padding: 10px;
    }

    .errorMessage {
        display: none;
    }

    span.formControl {
        width: 100%;
    }

    label, p {
        color: ${props => props.theme.colors.grey};
    }

    p {
        margin: 20px;
    }

    input, select {
         width: 100%;
         padding: 20px;
         margin: 15px 0;
         color: ${props => props.theme.colors.grey};
         border: 1px solid ${props => props.theme.colors.grey};
         opacity: 0.7;
    }

    .formFlexWrapper {
        display: grid;
        gap: 0.8rem;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        max-width: 1000px;
        margin: auto;
        padding: 10px;
        margin-bottom: 20px;
    }

    .formControlReason {
        display: block;
        width: 100%;
        max-width: 1000px;
        margin: auto;

        select {
            margin-top: 25px;
        }
    } 

    button {
        margin: 25px auto;
    }
`;
