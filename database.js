let Database = {
    cindy: {
        reminders: [{id: 1, title: "abc", description: "abcabc", completed: false}],
        id: 1,
        email: "cindy111@gmail.com",
        password: "cindy123"
    },
    alex: {
        reminders: []
    } 
};

const userModel = {
  findOne: (email) => {
    let user;
    for(const property in Database) {
        if (Database[property].email === email) {
        user = property
        }
    }
    if (user) {
      return user;
    }
    throw new Error(`Couldn't find user with email: ${email}`);
  },
  findById: (id) => {
    let user;
    for(const property in Database) {
    if (Database[property].id === id) {
        user = property
        }
    }
    if (user) {
      return user;
    }
    throw new Error(`Couldn't find user with id: ${id}`);
  },
};

module.exports = { Database, userModel };