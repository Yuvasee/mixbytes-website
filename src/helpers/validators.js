export const validateEmailFormat = email => /.+@.+\..+/gi.test(email);

export const validateMessage = message => message.length > 80;
