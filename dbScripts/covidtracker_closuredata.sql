-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: covidtracker
-- ------------------------------------------------------
-- Server version	8.0.26


--
-- Table structure for table `closuredata`
--

DROP TABLE IF EXISTS `closuredata`;

CREATE TABLE `closuredata` (
  `stateID` int NOT NULL,
  `stateName` text NOT NULL,
  `stayAtHome` text NOT NULL,
  `travelQuarantine` text NOT NULL,
  `nonEssentialClosed` text NOT NULL,
  `largeGatherings` text NOT NULL,
  `restaurants` text NOT NULL,
  `bars` text NOT NULL,
  `masks` text NOT NULL,
  `stateOfEmergency` text NOT NULL
);

--
-- Dumping data for table `closuredata`
--

LOCK TABLES `closuredata` WRITE;

INSERT INTO `closuredata` VALUES (1,'Alabama','Lifted','-','All Non-Essential Businesses Open','No Limit','Open','Open','No','No\r'),(2,'Alaska','Lifted','Lifted','All Non-Essential Businesses Open','No Limit','Open','Open','No','No\r'),(4,'Arizona','Lifted','Lifted','All Non-Essential Businesses Open','No Limit','Open','Open','No','Yes\r'),(5,'Arkansas','-','Lifted','All Non-Essential Businesses Open','No Limit','Open','Open','No','Yes\r'),(6,'California','Lifted','-','All Non-Essential Businesses Open','No Limit','Open','Open','Unvaccinated People Only','Yes\r'),(8,'Colorado','Lifted','-','All Non-Essential Businesses Open','No Limit','Open','Open','No','No\r'),(9,'Connecticut','Lifted','Lifted','All Non-Essential Businesses Open','No Limit','Open','Open','Unvaccinated People Only','Yes\r'),(10,'Delaware','Lifted','Lifted','All Non-Essential Businesses Open','Limit > 50','Open','Open','No','No\r'),(11,'District of Columbia','Lifted','Lifted','All Non-Essential Businesses Open','No Limit','Open','Open','Indoor Only','No\r'),(12,'Florida','Lifted','Lifted','All Non-Essential Businesses Open','No Limit','Open','Open','No','No\r'),(13,'Georgia','Lifted','-','All Non-Essential Businesses Open','No Limit','Open','Open','No','Yes\r'),(15,'Hawaii','Lifted','All Travelers','All Non-Essential Businesses Open with Limits','>10 Prohibited','Open with Service Limits','Open with Service Limits','Indoor Only','Yes\r'),(16,'Idaho','Lifted','Lifted','All Non-Essential Businesses Open','No Limit','Open','Open','No','Yes\r'),(17,'Illinois','Lifted','-','All Non-Essential Businesses Open','No Limit','Open','Open','No','Yes\r'),(18,'Indiana','Lifted','-','All Non-Essential Businesses Open','No Limit','Open','Open','No','Yes\r'),(19,'Iowa','-','-','All Non-Essential Businesses Open','No Limit','Open','Open','No','Yes\r'),(20,'Kansas','Lifted','From Certain States','All Non-Essential Businesses Open','No Limit','Open','Open','No','No\r'),(21,'Kentucky','Lifted','Lifted','All Non-Essential Businesses Open','No Limit','Open','Open','No','Yes\r'),(22,'Louisiana','Lifted','-','All Non-Essential Businesses Open','No Limit','Open','Open','Indoor Only','Yes\r'),(23,'Maine','Lifted','Lifted','All Non-Essential Businesses Open','No Limit','Open','Open','No','No\r'),(24,'Maryland','Lifted','Lifted','All Non-Essential Businesses Open','No Limit','Open','Open','No','Yes\r'),(25,'Massachusetts','Lifted','Lifted','All Non-Essential Businesses Open','No Limit','Open','Open','No','No\r'),(26,'Michigan','Lifted','-','All Non-Essential Businesses Open','No Limit','Open','Open','No','No\r'),(27,'Minnesota','Lifted','-','All Non-Essential Businesses Open','No Limit','Open','Open','No','No\r'),(28,'Mississippi','Lifted','-','All Non-Essential Businesses Open','No Limit','Open','Open','No','Yes\r'),(29,'Missouri','Lifted','-','All Non-Essential Businesses Open','No Limit','Open','Open','No','Yes\r'),(30,'Montana','Lifted','Lifted','All Non-Essential Businesses Open','No Limit','Open','Open','No','No\r'),(31,'Nebraska','-','Lifted','All Non-Essential Businesses Open','No Limit','Open','Open','No','No\r'),(32,'Nevada','Lifted','-','All Non-Essential Businesses Open','No Limit','Open','Open','Unvaccinated People Only','Yes\r'),(33,'New Hampshire','Lifted','Lifted','All Non-Essential Businesses Open','No Limit','Open','Open','No','No\r'),(34,'New Jersey','Lifted','Lifted','All Non-Essential Businesses Open','No Limit','Open','Open','No','No\r'),(35,'New Mexico','Lifted','Lifted','All Non-Essential Businesses Open','No Limit','Open','Open','Unvaccinated People Only','Yes\r'),(36,'New York','Lifted','Lifted','All Non-Essential Businesses Open','No Limit','Open','Open','Unvaccinated People Only','No\r'),(37,'North Carolina','Lifted','-','All Non-Essential Businesses Open','No Limit','Open','Open','No','No\r'),(38,'North Dakota','-','Lifted','All Non-Essential Businesses Open','No Limit','Open','Open','No','No\r'),(39,'Ohio','Lifted','Lifted','All Non-Essential Businesses Open','No Limit','Open','Open','No','No\r'),(40,'Oklahoma','Lifted','Lifted','All Non-Essential Businesses Open','No Limit','Open','Open','No','No\r'),(41,'Oregon','Lifted','-','All Non-Essential Businesses Open','No Limit','Open','Open','No','No\r'),(42,'Pennsylvania','Lifted','Lifted','All Non-Essential Businesses Open','No Limit','Open','Open','No','No\r'),(44,'Rhode Island','Lifted','From Certain States','All Non-Essential Businesses Open','No Limit','Open','Open','No','Yes\r'),(45,'South Carolina','Lifted','Lifted','All Non-Essential Businesses Open','No Limit','Open','Open','No','No\r'),(46,'South Dakota','-','-','All Non-Essential Businesses Open','No Limit','Open','Open','No','No\r'),(47,'Tennessee','Lifted','-','All Non-Essential Businesses Open','No Limit','Open','Open','No','No\r'),(48,'Texas','Lifted','Lifted','All Non-Essential Businesses Open','No Limit','Open','Open','No','Yes\r'),(49,'Utah','Lifted','Lifted','All Non-Essential Businesses Open','No Limit','Open','Open','No','Yes\r'),(50,'Vermont','Lifted','Lifted','All Non-Essential Businesses Open','No Limit','Open','Open','No','No\r'),(51,'Virginia','Lifted','-','All Non-Essential Businesses Open','No Limit','Open','Open','No','Yes\r'),(53,'Washington','Lifted','Lifted','All Non-Essential Businesses Open','No Limit','Open','Open','Unvaccinated People Only','Yes\r'),(54,'West Virginia','Lifted','Lifted','All Non-Essential Businesses Open','No Limit','Open','Open','No','Yes\r'),(55,'Wisconsin','Lifted','-','All Non-Essential Businesses Open','No Limit','Open','Open','No','No\r'),(56,'Wyoming','-','Lifted','All Non-Essential Businesses Open','No Limit','Open','Open','No','Yes\r');

UNLOCK TABLES;


-- Dump completed on 2021-10-17 23:34:11
