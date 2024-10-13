const connection=require('../config/database')
const getHomepage=(req, res) =>{
    // let users=[]
    // connection.query(
    //     'SELECT * FROM Users u',
    //     function(err, results, fields) {
    //         users=results
    //         console.log(users)
    //         res.send(JSON.stringify(users))
    //     }
    // );
    return res.render('homepage.ejs')
}
const getduypage=(req, res) => {
    res.render('sample.ejs')
  }
  const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    
    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?) `, [email, name, city]
    );

    res.send(' Created user succeed !')

};
    // const[results,fields]=await connection.query('SELECT * FROM Users u')
    // console.log(results)


const getCreatePage=(req,res)=>{
    res.render('create.ejs')
}


module.exports={
    getHomepage,
    getduypage,
    postCreateUser,
    getCreatePage
}