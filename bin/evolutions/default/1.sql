# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table todo (
  id                        bigserial not null,
  todo_label                varchar(255),
  creation_date             timestamp,
  due_date                  timestamp,
  status                    boolean,
  constraint pk_todo primary key (id))
;




# --- !Downs

drop table if exists todo cascade;

