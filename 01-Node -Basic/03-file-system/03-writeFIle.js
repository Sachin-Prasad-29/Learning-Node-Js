const fs = require('fs');

const data = {
    name: 'sachin',
};

fs.writeFile('data2.json', JSON.stringify(data), (error) => {
    console.log("Write Finised ",data);
});
