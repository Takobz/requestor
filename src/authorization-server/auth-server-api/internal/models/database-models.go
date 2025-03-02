package models

type User struct {
	UserId string `db:"user_id"`
	Name string `db:"name"`
	Email string `db:"email"`
}

type Resource struct {
	ResourceId string `db:"resource_id"`
	ResourceName string `db:"resource_name"`
	ResourceOwnerId string `db:"resource_owner_id"`
}