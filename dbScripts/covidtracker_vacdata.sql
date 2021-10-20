-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: covidtracker
-- ------------------------------------------------------
-- Server version	8.0.26



--
-- Table structure for table `vacdata`
--

DROP TABLE IF EXISTS `vacdata`;

CREATE TABLE `vacdata` (
  `StateID` int NOT NULL,
  `stateName` varchar(256) NOT NULL,
  `firstDose` int NOT NULL,
  `secondDose` int NOT NULL,
  `totalDose` int NOT NULL
);

--
-- Dumping data for table `vacdata`
--

LOCK TABLES `vacdata` WRITE;

INSERT INTO `vacdata` VALUES (1,'Alabama',1914810,1575798,3376543),(2,'Alaska',345790,315207,660997),(4,'Arizona',2818074,2498801,5107172),(5,'Arkansas',1352937,1077347,2430284),(6,'California',24199969,21077338,43494975),(8,'Colorado',0,0,6187506),(9,'Connecticut',2309139,2126040,4435179),(10,'Delaware',55802,424378,1045030),(11,'District of Columbia',337313,291409,605434),(12,'Florida',0,0,0),(13,'Georgia',4643648,4131572,8609808),(15,'Hawaii',941258,847978,1739768),(16,'Idaho',49368,666622,715990),(17,'Illinois',6649193,6407664,13056857),(18,'Indiana',2890280,2698884,5808738),(19,'Iowa',96583,1399920,3023763),(20,'Kansas',1240103,1098915,2339018),(21,'Kentucky',0,0,1482897),(22,'Louisiana',1811308,1649317,3460625),(23,'Maine',760078,806182,1566260),(24,'Marlyand',3573129,3254132,7096723),(25,'Massachusetts',5280142,4808482,10088624),(26,'Michigan',4893766,4236959,9130725),(27,'Minnesota',3123226,2973795,6097021),(28,'Mississippi',1087781,967018,1999752),(29,'Missouri',2506480,2183398,4539778),(30,'Montana',408437,393324,729682),(31,'Nebraska',0,0,950542),(32,'Nevada',1596944,1324305,2791209),(33,'New Hampshire',818908,750018,1568926),(34,'New Jersey',5652904,5053663,10317920),(35,'New Mexico',1158422,1032181,2190603),(36,'New York',11658456,10737073,22395529),(37,'North Carolina',3682700,3247045,6929745),(38,'North Dakota',307928,290879,575840),(39,'Ohio',5698421,5335355,11033776),(40,'Oklahoma',0,0,0),(41,'Oregon',152846,2225752,2378598),(42,'Pennsylvania',5862618,5661300,11523918),(44,'Rhode Island',0,0,0),(45,'South Carolina',2151990,1894015,3897249),(46,'South Dakota',22095,329232,374889),(47,'Tennessee',2964824,2646976,5509856),(48,'Texas',14501148,12490564,25950549),(49,'Utah',0,0,0),(50,'Vermont',32400,405500,437254),(51,'Virginia',5070553,4560561,9311533),(54,'West Virginia',0,0,0),(55,'Wisconsin',0,0,0),(56,'Wyoming',196257,181635,393268);

UNLOCK TABLES;


-- Dump completed on 2021-10-17 23:34:11
