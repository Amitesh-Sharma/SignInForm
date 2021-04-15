export const requiredInput = (input) =>
    input ? undefined : `Input is Required`;

export const correctInput = input =>
    input !== 'Amitesh' ? 'Incorrect Username' : undefined;

export const matchInput = (input, allInputs) =>
    input === allInputs.password ? undefined : 'Passwords do not Match';