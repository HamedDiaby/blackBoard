const mongoose = require('mongoose');

var option = {
    connectTimeoutMS: 5000,
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect('mongodb+srv://lacapsule:EXIrgUdaFEllfNSH@cluster0-9xbpy.mongodb.net/blackboard?retryWrites=true&w=majority',
    option,
    function(err){
        console.log(err);
    }
);

module.exports = mongoose;
