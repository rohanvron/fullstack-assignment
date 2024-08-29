const mongoose = require('mongoose');
const Card = require('../models/card.model');
const connectDB = require('../config/database');

const cards = [
  { title: 'Branches', description: 'Abstract Branches lets you manage, version, and document your designs in one place.' },
  { title: 'Manage your account', description: 'Configure your account settings, such as your email, profile details, and password.' },
  { title: 'Manage organizations, teams, and projects', description: 'Use Abstract organizations, teams, and projects to organize your people and your work.' },
  { title: 'Manage billing', description: 'Change subscriptions and payment details.' },
  { title: 'Authenticate to Abstract', description: 'Set up and configure SSO, SCIM, and Just-In-Time provisioning.' },
  { title: 'Abstract support', description: 'Get in touch with a human.' }
];

const seedDB = async () => {
  await connectDB();
  await Card.deleteMany({});
  await Card.insertMany(cards);
  console.log('Database seeded!');
  mongoose.connection.close();
};

seedDB();