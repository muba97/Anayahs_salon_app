import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Services from '../Components/Services';

const serviceInfo = {
  serviceLabels: [{ service: 'threading' }, { service: 'facial' }],
  items: [
    {
      key: 1,
      title: 'Eyebrows',
      time: '15',
      price: '10',
      description: 'you get yours eyebrows threading dun dun DUUUUN',
      label: 'threading',
    },
    {
      key: 2,
      title: 'Chin',
      time: '15',
      price: '7',
      description: 'you get yours chin threading dun dun DUUUUN',
      label: 'threading',
    },
    {
      key: 3,
      title: 'face',
      time: '30',
      price: '25',
      description: 'you get yours facial dun dun DUUUUN',
      label: 'facial',
    },
  ],
};
const useStyles = makeStyles({
  root: {
    margin: 40,
  },
});
const newService = (e) => {
  let condition = false;

  if (e === 'threading') {
    condition = true;
  }
  return condition;
};

const handleChange = (e) => {
  const temp = [];
  for (let i = 0; i < serviceInfo.items.length; i += 1) {
    if (serviceInfo.items[i].label === e) {
      temp.push(serviceInfo.items[i]);
    }
  }
  return temp;
};

const ServicePage = () => {
  const classes = useStyles();
  return (
    <div data-testid="servicePage">
      {serviceInfo.serviceLabels.map((labels) => (
        <div key={labels.service} data-testid="labels" className={classes.root}>
          <Services
            serviceLabels={labels.service}
            items={handleChange(labels.service)}
            newService={newService(labels.service)}
          />
        </div>
      ))}
    </div>
  );
};

export default ServicePage;
