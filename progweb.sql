-- MySQL dump 10.13  Distrib 5.7.13, for Linux (x86_64)
--
-- Host: localhost    Database: progweb
-- ------------------------------------------------------
-- Server version	5.7.13-0ubuntu0.16.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `histClinica`
--

DROP TABLE IF EXISTS `histClinica`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `histClinica` (
  `histId` int(11) NOT NULL AUTO_INCREMENT,
  `pacId` int(11) NOT NULL,
  `medId` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `descripcion` text NOT NULL,
  PRIMARY KEY (`histId`),
  KEY `pacId` (`pacId`),
  KEY `medId` (`medId`),
  CONSTRAINT `histClinica_ibfk_1` FOREIGN KEY (`pacId`) REFERENCES `paciente` (`pacId`),
  CONSTRAINT `histClinica_ibfk_2` FOREIGN KEY (`medId`) REFERENCES `medico` (`medId`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `histClinica`
--

LOCK TABLES `histClinica` WRITE;
/*!40000 ALTER TABLE `histClinica` DISABLE KEYS */;
INSERT INTO `histClinica` VALUES (1,3,3,'2016-07-18','Historia clinica de pruebas'),(2,2,2,'2016-07-18','Nueva hist clinica de pruebas!!!'),(3,2,2,'2016-07-18','Prueba 3'),(4,3,2,'2016-07-18','nueva prueba'),(5,4,2,'2016-07-27','Esto es una nueva prueba de historia clinica.\r\nsadas\r\nllsandkasd\r\nsigue la prueba'),(6,2,2,'2016-07-27','Otra prueba para el paciente'),(7,3,3,'2016-07-27','Nuevo ingreso a la historia.'),(8,5,3,'2016-07-29','Historia de prueba para el nuevo paciente.'),(9,5,2,'2016-07-29','Nueva prueba'),(10,4,3,'2016-07-29','Probando cambios en la visualizacion');
/*!40000 ALTER TABLE `histClinica` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medico`
--

DROP TABLE IF EXISTS `medico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `medico` (
  `medId` int(11) NOT NULL AUTO_INCREMENT,
  `apellido` varchar(45) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `dni` bigint(20) NOT NULL,
  `nroMatricula` int(11) NOT NULL,
  PRIMARY KEY (`medId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medico`
--

LOCK TABLES `medico` WRITE;
/*!40000 ALTER TABLE `medico` DISABLE KEYS */;
INSERT INTO `medico` VALUES (2,'Diaz','Mario',48554841,1579),(3,'Alvarez','Juan Pablo',574125752,12563),(4,'Martinez','Sofia',574211255,151234);
/*!40000 ALTER TABLE `medico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paciente`
--

DROP TABLE IF EXISTS `paciente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `paciente` (
  `pacId` int(11) NOT NULL AUTO_INCREMENT,
  `apellido` varchar(45) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `dni` bigint(20) NOT NULL,
  `sexo` char(1) NOT NULL,
  `fechaNac` date NOT NULL,
  PRIMARY KEY (`pacId`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paciente`
--

LOCK TABLES `paciente` WRITE;
/*!40000 ALTER TABLE `paciente` DISABLE KEYS */;
INSERT INTO `paciente` VALUES (2,'Alvarez','Roberto',45875542,'M','2003-05-27'),(3,'Juarez','Ana',57442155,'F','2008-03-21'),(4,'Rodriguez','Maria',3521455,'F','2004-06-25'),(5,'Fernandez','Pedro',4545121458,'M','1996-03-30');
/*!40000 ALTER TABLE `paciente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `turno`
--

DROP TABLE IF EXISTS `turno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `turno` (
  `turnoId` int(11) NOT NULL AUTO_INCREMENT,
  `pacId` int(11) DEFAULT NULL,
  `medId` int(11) DEFAULT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  PRIMARY KEY (`turnoId`),
  KEY `medId` (`medId`),
  KEY `pacId` (`pacId`),
  CONSTRAINT `turno_ibfk_1` FOREIGN KEY (`medId`) REFERENCES `medico` (`medId`),
  CONSTRAINT `turno_ibfk_2` FOREIGN KEY (`pacId`) REFERENCES `paciente` (`pacId`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `turno`
--

LOCK TABLES `turno` WRITE;
/*!40000 ALTER TABLE `turno` DISABLE KEYS */;
INSERT INTO `turno` VALUES (1,NULL,2,'2016-08-04','17:00:00'),(2,NULL,2,'2016-08-04','18:00:00'),(3,NULL,2,'2016-08-04','19:00:00'),(4,NULL,2,'2016-08-04','20:00:00'),(5,NULL,3,'2016-08-04','17:00:00'),(6,NULL,3,'2016-08-04','18:00:00'),(7,NULL,3,'2016-08-04','19:00:00'),(8,NULL,3,'2016-08-04','20:00:00'),(9,NULL,2,'2016-08-08','17:00:00'),(10,NULL,2,'2016-08-08','18:00:00'),(11,NULL,2,'2016-08-08','19:00:00'),(12,NULL,2,'2016-08-08','20:00:00'),(13,NULL,3,'2016-08-08','17:00:00'),(14,NULL,3,'2016-08-08','18:00:00'),(15,NULL,3,'2016-08-08','19:00:00'),(16,NULL,3,'2016-08-08','20:00:00'),(17,NULL,2,'2016-08-09','17:00:00'),(18,NULL,2,'2016-08-09','18:00:00'),(19,NULL,2,'2016-08-09','19:00:00'),(20,NULL,2,'2016-08-09','20:00:00'),(21,NULL,3,'2016-08-09','17:00:00'),(22,3,3,'2016-08-09','18:00:00'),(23,NULL,3,'2016-08-09','19:00:00'),(24,NULL,3,'2016-08-09','20:00:00'),(25,NULL,2,'2016-08-10','17:00:00'),(26,NULL,2,'2016-08-10','18:00:00'),(27,NULL,2,'2016-08-10','19:00:00'),(28,NULL,2,'2016-08-10','20:00:00'),(29,NULL,3,'2016-08-10','17:00:00'),(30,NULL,3,'2016-08-10','18:00:00'),(31,NULL,3,'2016-08-10','19:00:00'),(32,NULL,3,'2016-08-10','20:00:00'),(33,5,4,'2016-08-10','17:00:00'),(34,NULL,4,'2016-08-10','18:00:00'),(35,NULL,4,'2016-08-10','19:00:00'),(36,NULL,4,'2016-08-10','20:00:00');
/*!40000 ALTER TABLE `turno` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-08-09 12:47:51
