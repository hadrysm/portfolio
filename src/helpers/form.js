import * as Yup from 'yup';
import emailjs from 'emailjs-com';

export const validationSchema = ({ emailMesssage, requiredMessage }) =>
  Yup.object().shape({
    email: Yup.string().email(emailMesssage).required(requiredMessage),
    message: Yup.string().required(requiredMessage),
  });

export const handleSendMessage = data =>
  emailjs.send(
    process.env.GATSBY_EMAILJS_SERVICE_ID,
    process.env.GATSBY_EMAILJS_TEMPLATE_ID,
    data,
    process.env.GATSBY_EMAILJS_USER_ID,
  );
