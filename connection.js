
/* let config = {
	user: 'db_a6478c_fsya_admin',
	password: 'razors1805',
	server: 'sql5112.site4now.net',
	database: 'db_a6478c_fsya',
	pool: {	max: 100,	min: 0,	idleTimeoutMillis: 30000}
};
 */


	let config = {
		user: 'antonioDB',
		password: 'antonio',
		server: '127.0.0.1',
		database: 'db_laboratorio',
		pool: {	max: 100,	min: 0,	idleTimeoutMillis: 30000},
		port: 3307
	};

let configLocal = {
	user: 'iEx', 
	password: 'iEx', 
	server: 'DESKTOP-3L7R1E4\\SQL22', 
	database: 'TRIGUEROS',
	pool: {	max: 100,	min: 0,	idleTimeoutMillis: 30000}
};


const sql = require('mssql');

let execute = {
	Query : (res,sqlqry)=>{	
		
		try {
		  const pool1 = new sql.ConnectionPool(config, err => {
			new sql.Request(pool1)
			.query(sqlqry, (err, result) => {
				if(err){
					console.log(err.message);
					res.send('error')
				}else{
					res.send(result);
				}					
			})
			sql.close();  
		  })
		  pool1.on('error', err => {
			  console.log('error sql = ' + err);
			  sql.close();
			  res.send('error');
		  })
		} catch (error) {
			console.log(error);
		  res.send('error')   
		  sql.close();
		}
	}
}



module.exports = execute;

