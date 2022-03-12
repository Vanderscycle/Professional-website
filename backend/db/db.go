package db

import (
	"backend/cipher"
	"backend/database"

	"github.com/gofiber/fiber/v2"
)

func DropDB(c *fiber.Ctx) error {
	db := database.DBConn
	//drop db
	/// can always call in an array
	db.Migrator().DropTable(&cipher.EncryptedData{})
	//recreate db
	db.AutoMigrate(&cipher.EncryptedData{})

	msg := []byte("Dropped table")
	return c.Send(msg)

}
