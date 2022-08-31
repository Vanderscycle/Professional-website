package main

//TODO: when hosted on github I could set a var to link to it
// TODO: add a .env file for the db keywords
import (
	"backend/cipher"
	"backend/database"
	"backend/db"
	"fmt"
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/joho/godotenv"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func setupRoutes(app *fiber.App) {
	//blogPoint endpoints
	apiblogPost := app.Group("/api/cipher")
	apiblogPost.Get("", cipher.GetAll)
	apiblogPost.Get(":id", cipher.Get)
	apiblogPost.Post("", cipher.New)
	apiblogPost.Delete(":id", cipher.Delete)
	//dev endpoints}
	apiDB := app.Group("/api/db")
	apiDB.Delete("", db.DropDB)
}

func initPostgresDatabase() {
	dsn := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%s sslmode=disable TimeZone=Asia/Shanghai", os.Getenv("HOST"), os.Getenv("DB_USER"), os.Getenv("DB_PASSWORD"), os.Getenv("DB_NAME"), os.Getenv("PORT"))
	var err error
	database.DBConn, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("Failed to connect to database")
	}
	fmt.Println("Database connection successfully")
	//automigrate
	database.DBConn.AutoMigrate(&cipher.EncryptedData{})
	log.Println("Database Migrated")
}

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
	initPostgresDatabase()
	const port string = ":5000"
	app := setup()
	app.Listen(port)
}

func setup() *fiber.App {
	app := fiber.New()
	app.Use(cors.New())
	setupRoutes(app)
	return app
}
