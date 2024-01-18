const Todo = require('../models/Todo');

exports.getTodo = async (req,res) => {
    try {
        //fetch all todo items from database
        const todos = await Todo.find({});

        //response
        res.status(200).json({
            success: true,
            data:todos,
            message:'entire data is available'
        })
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            error: err.message,
            message: 'Server error'
        });
    }
}

exports.getTodobyId = async (req, res) => {
    try{
        const id = req.params.id;
        //extract todo item basis on id
        const todo = await Todo.findById({_id: id});

        //data for given id not found
        if(!todo){
            return res.status(404).json({
                success: false,
                message: 'Todo item not found',

            })
        }
        //data for given id found
        res.status(200).json({
            success: true,
            data: todo,
            message: `Todo item found ${id}`
        })
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success: false,
            error: err.message,
            message: 'Server error'
        })
    }
}