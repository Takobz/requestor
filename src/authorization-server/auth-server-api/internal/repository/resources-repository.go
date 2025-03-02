package repository

import (
	"authorization-server/auth-server-api/internal/models"
)

type IResourceRepository interface {
	GetResourceById(resourceId string) models.Resource
	GetResourcesByUserId(userId string) []models.Resource
}

type ResourceRepository struct{}

func (repo *ResourceRepository) GetResourceById(resourceId string) models.Resource {
	return models.Resource{}
}

func (repo *ResourceRepository) GetResourceByUserId(userId string) []models.Resource {
	return []models.Resource{}
}
