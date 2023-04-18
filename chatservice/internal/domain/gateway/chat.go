package gateway

import (
	"context"

	"github.com/AllanCordeiro/fclx/chatservice/internal/domain/entity"
)

type ChatGateway interface {
	CreateChat(ctx context.Context, chat *entity.Chat) error
	FindChatByID(ctx context.Context, chadID string) (*entity.Chat, error)
	SaveChat(ctx context.Context, chat *entity.Chat) error
}
