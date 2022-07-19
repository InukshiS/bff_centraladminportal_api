const ActiveDirectory = require('activedirectory');
const { pool } = require('../dbconfig');

module.exports = (req, res) => {
  
  //Check Body Is Empty
  if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(200).json({Type: "ERROR", Msg : "Oops! Empty Data Set."})
       return;
  }
//Check Element Count
  if(Object.keys(req.body).length != 2) {
    res.status(200).json({Type: "ERROR", Msg : "Oops! Can't Find Correct Dataset"})
       return;
  }

  
  var config = { url: 'ldap://col-dc-05.BRANDIXLK.ORG', baseDN: 'dc=domain,dc=com' };

    var ad = new ActiveDirectory(config);
    var get_username = req.body.username;
    var username = get_username.toLowerCase();
    var password = req.body.password;

    var selectqry = `SELECT * FROM cpusers WHERE LOWER(us_name)='${username}' AND us_active='true';`;
            
            
            pool.query(selectqry, (error, results) => {
              if (error) {
                res.status(200).json({Type: 'ERROR', Msg : error.message, Stack : error.stack})
              }
            else {
              // res.status(200).json({Type: 'SUCCESS', us_id : results.rows[0].us_id,  adminid : results.rows[0].adminid,  us_name : results.rows[0].adminid, us_type : results.rows[0].us_type})
              res.status(200).json({Type: 'SUCCESS', })
              return;

            }
            //   res.status(200).json({ Type: "ERROR", Msg : "User Not Found. Please Check your Username and Password Again"});
            //   return;
            // }
             });
    // // Authenticate
    // ad.authenticate(username, password, function(err, auth) {
    //     if (err) {
    //         //console.log('ERROR: '+JSON.stringify(err));
    //         res.status(200).json({ Type: "ERROR", Msg : "Oops! User Details are not valid. Please Try again!"});
    //         return;
    //     }
    //     else
    //     {
    //       if (auth) {
    //         //console.log('Authenticated!');
    //         var selectqry = `SELECT * FROM cpusers WHERE LOWER(us_name)='${username}' AND us_active='true';`;;
            
            
            
    //         pool.query(selectqry, (error, results) => {
    //           if (error) {
    //             res.status(200).json({Type: 'ERROR', Msg : error.message, Stack : error.stack})
    //             return;
    //           }
    //           else
    //           {
    //             if(results.rows.length == 1){

    //               res.status(200).json({Type: 'SUCCESS', us_id : results.rows[0].us_id,  adminid : results.rows[0].adminid,  us_name : results.rows[0].adminid, us_type : results.rows[0].us_type})
    //               return;
    //             }
    //             else
    //             {
    //               res.status(200).json({Type: 'ERROR', Msg : 'User not found. Please Check your Username and Password Again', Stack : 'User Not Found.'})
    //               return;
    //             }
    //           }
       
    //         });
    //       }
    //       else {
    //         //console.log('Authentication failed!');
              
    
    //  });
  
  
 };