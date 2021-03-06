import uniqid from 'uniqid';

const educationLabels = ['University', 'Major', 'Degree', 'From', 'To'];
const experienceLabels = ['Company', 'Position', 'Main Task', 'From', 'To'];

export const getLabels = title => (title === 'Education' ? educationLabels : experienceLabels);

export const createBlock = labels => {
  const block = {
    blockId: uniqid('block'),
    inputs: [],
  };
  for (let i = 0; i< labels.length; i++) {
    const input = { label: labels[i], value: '' };
    block.inputs.push(input);
  }
  return block;
};
