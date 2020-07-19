import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Services from '../Components/service';

const serviceInfo = {
  serviceLabels: [{ service: 'threading' }, { service: 'facial' }],
  items: [
    {
      id: 1,
      title: 'Eyebrows',
      time: '15',
      price: '10',
      description: 'you get yours eyebrows threading dun dun DUUUUN',
      label: 'threading',
    },
    {
      id: 2,
      title: 'Chin',
      time: '15',
      price: '7',
      description: 'you get yours chin threading dun dun DUUUUN',
      label: 'threading',
    },
    {
      id: 3,
      title: 'face',
      time: '30',
      price: '25',
      description: 'you get yours facial dun dun DUUUUN',
      label: 'facial',
    },
  ],
};

const handleChange = (e) => {
  let temp = [];
  if (temp !== []) {
    temp = [];
  }
  for (let i = 0; i < serviceInfo.items.length; i += 1) {
    if (serviceInfo.items[i].label === e) {
      temp.push(serviceInfo.items[i]);
    }
  }
  return temp;
};

const useStyles = makeStyles({
  root: {
    marginTop: 40,
  },
});

const newService = (e) => {
  let condition = false;

  if (e === 'threading') {
    condition = true;
  }
  return condition;
};

const ServicePage = () => {
  const classes = useStyles();
  return (
    <div data-testid="servicePage">
      {serviceInfo.serviceLabels.map((labels) => (
        <div className={classes.root} key={labels.service}>
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
