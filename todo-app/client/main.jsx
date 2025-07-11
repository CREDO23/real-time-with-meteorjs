import React from 'react';
import { createRoot } from 'react-dom/client';
import { Meteor } from 'meteor/meteor';
import { App } from '/imports/ui/App';
import '../imports/api/task/methods'

Meteor.startup(() => {
  const container = document.getElementById('react-target');
  const root = createRoot(container);
  root.render(<App />);
});
