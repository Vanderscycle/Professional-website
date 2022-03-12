package cipher

import (
	"backend/database"
	"github.com/gofiber/fiber/v2"
	"gorm.io/gorm"
)

type EncryptedData struct {
	gorm.Model
	Title    string `json:"title"`
	Author   string `json:"author`
	MainText string `json:"mainText"`
}

func GetAll(c *fiber.Ctx) error {
	db := database.DBConn
	var entry []EncryptedData
	db.Find(&entry)
	return c.JSON(entry)
}

func Get(c *fiber.Ctx) error {
	id := c.Params("id")
	db := database.DBConn
	var entry EncryptedData
	db.Find(&entry, id)
	return c.JSON(entry)
}

func New(c *fiber.Ctx) error {
	db := database.DBConn
	entry := new(EncryptedData)
	if err := c.BodyParser(entry); err != nil {
		return c.Status(503).Send([]byte("error"))
	}
	db.Create(&entry)
	return c.JSON(entry)
}

func Delete(c *fiber.Ctx) error {
	id := c.Params("id")
	db := database.DBConn
	var entry EncryptedData
	db.First(&entry, id)
	if entry.Title == "" {
		errMsg := []byte("No record matches the id")
		return c.Status(500).Send(errMsg)
	}
	db.Delete(&entry) // TODO: how to concat to byte
	msg := []byte("post deleted successfully")
	return c.Send(msg)
}
