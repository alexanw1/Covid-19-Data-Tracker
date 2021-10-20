-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: covidtracker
-- ------------------------------------------------------
-- Server version	8.0.26



--
-- Table structure for table `states`
--

DROP TABLE IF EXISTS `states`;

CREATE TABLE `states` (
  `StateID` int NOT NULL,
  `stateName` varchar(256) NOT NULL,
  `abrv` varchar(5) NOT NULL,
  `latitude` float NOT NULL,
  `longitude` float NOT NULL
);

--
-- Dumping data for table `states`
--

LOCK TABLES `states` WRITE;

INSERT INTO `states` VALUES (1,'Alabama','AL',32.3777,-86.3006),(2,'Alaska','AK',58.3016,-134.42),(4,'Arizona','AZ',33.4481,-112.097),(5,'Arkansas','AR',34.7466,-92.289),(6,'California','CA',38.5767,-121.494),(8,'Colorado','CO',39.7392,-104.985),(9,'Connecticut','CT',41.764,-72.6822),(10,'Delaware','DE',39.1573,-75.5197),(11,'District of Columbia','DC',38.9072,-77.0369),(12,'Florida','FL',30.4381,-84.2813),(13,'Georgia','GA',33.749,-84.3882),(15,'Hawaii','HI',21.3074,-157.857),(16,'Idaho','ID',43.6178,-116.2),(17,'Illinois','IL',39.7984,-89.655),(18,'Indiana','IN',39.7686,-86.1626),(19,'Iowa','IA',41.5911,-93.6037),(20,'Kansas','KS',39.0482,-95.678),(21,'Kentucky','KY',38.1867,-84.8754),(22,'Louisiana','LA',30.4571,-91.1874),(23,'Maine','ME',44.3072,-69.7817),(24,'Maryland','MD',38.9788,-76.4909),(25,'Massachusetts','MA',42.3582,-71.0637),(26,'Michigan','MI',42.7336,-84.5553),(27,'Minnesota','MN',44.9551,-93.1022),(28,'Mississippi','MS',32.3038,-90.1821),(29,'Missouri','MO',38.5792,-92.1729),(30,'Montana','MT',46.5857,-112.018),(31,'Nebraska','NE',40.8081,-96.6997),(32,'Nevada','NV',39.1639,-119.766),(33,'New Hampshire','NH',43.2069,-71.538),(34,'New Jersey','NJ',40.2206,-74.7699),(35,'New Mexico','NM',35.6822,-105.94),(36,'New York','NY',42.6528,-73.7579),(37,'North Carolina','NC',35.7804,-78.6391),(38,'North Dakota','ND',46.8209,-100.783),(39,'Ohio','OH',39.9613,-82.9991),(40,'Oklahoma','OK',35.4922,-97.5033),(41,'Oregon','OR',44.9385,-123.03),(42,'Pennsylvania','PA',40.2644,-76.8836),(44,'Rhode Island','RI',41.8309,-71.415),(45,'South Carolina','SC',34.0003,-81.0332),(46,'South Dakota','SD',44.367,-100.346),(47,'Tennessee','TN',36.1658,-86.7842),(48,'Texas','TX',30.2747,-97.7403),(49,'Utah','UT',40.7775,-111.888),(50,'Vermont','VT',44.2624,-72.5805),(51,'Virginia','VA',37.5389,-77.4336),(53,'Washington','WA',47.0358,-122.905),(54,'West Virginia','WV',38.3362,-81.6123),(55,'Wisconsin','WI',43.0747,-89.3844),(56,'Wyoming','WY',41.1403,-104.82);

UNLOCK TABLES;


-- Dump completed on 2021-10-17 23:34:11
