BEGIN TRANSACTION;

DROP TABLE IF EXISTS  users, Account, Exercise, Gym_Class, GymClassRegistrationRecord,   Workout, Workout_time, Workout_Exercise, Muscle_group,  Muscle_group_exercise , Equipment, Equipment_Exercise, EquipmentUsageLog CASCADE ;


CREATE TABLE users (
                       user_id SERIAL,
                       username varchar(50) NOT NULL UNIQUE,
                       password_hash varchar(200) NOT NULL,
                       role varchar(50) NOT NULL,
                       CONSTRAINT PK_user PRIMARY KEY (user_id)
);