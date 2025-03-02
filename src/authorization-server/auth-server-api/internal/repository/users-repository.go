package repository

import (
	"authorization-server/auth-server-api/internal/models"
)

type IUsersRepository interface {
	GetUserById(userId string) models.User
}

type UserRepository struct {}

func (repo *UserRepository) GetUserById(userId string) models.User {
	return models.User{}
}
