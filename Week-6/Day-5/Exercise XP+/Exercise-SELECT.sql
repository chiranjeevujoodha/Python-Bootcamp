select * from students;

select last_name, first_name from students;

select last_name, first_name from students where id = 2;

select last_name, first_name from students 
where last_name = 'Benichou' and first_name = 'Marc';

select last_name, first_name from students 
where last_name = 'Benichou' or first_name = 'Marc';

select last_name, first_name from students 
where first_name like '%a%';

select last_name, first_name from students 
where first_name like 'A%';

select last_name, first_name from students 
where first_name like '%a';

select last_name, first_name from students 
where first_name like '%a_';

select last_name, first_name from students 
where id in (1,3);

select * from students
where birth_date >= '01/01/2000';


	


	




	

	

	
