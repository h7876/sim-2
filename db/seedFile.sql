drop table if exists houses;

create table houses (
    id serial primary key,
    propertyName text,
    address text,
    city text,
    state text,
    zip int
);

insert into houses 
(propertyName, address, city, state, zip) 
values 
('Triplex', '4567 S Road St', 'Orem', 'UT', 84097),
('Duplex', '456 E Bakers St', 'Salt Lake City', 'UT', 84091)
