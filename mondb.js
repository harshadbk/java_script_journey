db.ipl.aggregate({$match:{name:"powel"}})

db.ipl.aggregate({$project:{name:1,age:1,_id:-1}})

db.student.aggregate({$group:{_id:"$dept",total_students:{$sum:1}}})


db.ipl.aggregate({$group:{_id:"$team",total_runs:{$sum:1}}})

db.ipl.aggregate({$match:{name:"buttler"}},{$group:{_id:"$player",ipl_run:{$sum:1}}})