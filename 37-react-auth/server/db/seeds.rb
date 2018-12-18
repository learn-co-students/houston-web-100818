User.destroy_all

[
    { name: 'alan', email: 'alan@example.com', phone: '1-800-alan', password: 'P@ssw0rd', image_url: 'https://files.slack.com/files-pri/T02MD9XTF-FEW57T7GT/rte_alan.png' },
    { name: 'joe', email: 'joe@example.com', phone: '1-800-joe', password: 'P@ssw0rd', image_url: 'https://i.stack.imgur.com/WmvM0.png'  },
    { name: 'hannah', email: 'hannah@example.com', phone: '1-800-hannah', password: 'P@ssw0rd', image_url: 'https://i.stack.imgur.com/WmvM0.png' },
    { name: 'eddie', email: 'eddie@example.com', phone: '1-800-eddie', password: 'P@ssw0rd', image_url: 'https://i.stack.imgur.com/WmvM0.png' },
    { name: 'alex', email: 'alex@example.com', phone: '1-800-alex', password: 'P@ssw0rd', image_url: 'https://i.stack.imgur.com/WmvM0.png' },
    { name: 'bilikis', email: 'bilikis@example.com', phone: '1-800-bilikis', password: 'P@ssw0rd', image_url: 'https://i.stack.imgur.com/WmvM0.png' },
    { name: 'janet', email: 'janet@example.com', phone: '1-800-janet', password: 'P@ssw0rd', image_url: 'https://i.stack.imgur.com/WmvM0.png' },
    { name: 'robert', email: 'robert@example.com', phone: '1-800-robert', password: 'P@ssw0rd', image_url: 'https://i.stack.imgur.com/WmvM0.png' },
    { name: 'jordan', email: 'jordan@example.com', phone: '1-800-jordan', password: 'P@ssw0rd', image_url: 'https://i.stack.imgur.com/WmvM0.png' },
    { name: 'megan', email: 'megan@example.com', phone: '1-800-megan', password: 'P@ssw0rd', image_url: 'https://i.stack.imgur.com/WmvM0.png' },
    { name: 'barbara', email: 'barbara@example.com', phone: '1-800-barbara', password: 'P@ssw0rd', image_url: 'https://i.stack.imgur.com/WmvM0.png' },
    { name: 'josh', email: 'josh@example.com', phone: '1-800-josh', password: 'P@ssw0rd', image_url: 'https://i.stack.imgur.com/WmvM0.png' }
].each do | user_attributes | 
    User.create(user_attributes)
end