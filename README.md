# keyprod-delivery

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```
```

## Présentation

#### Router

```
  /Home
  --- /Orders
        |
        ---- /Order/:id
  --- /Products
        |
        ---- /Product/:id
  --- /Parcels
```

La navigation se fait par la barre de navigation du bas. Les 

#### **_/Home_**
Page reprenant l'intégration d'une maquette.

#### **_/Orders_**
Page regroupant toutes les commandes. 

**Features**
- Il est possible de consulter les commandes et leurs status. 
- Il est possible de filtrer chaque colonne. 
- Il est possible de chercher les commandes en fonction du nom du client graçe au champ de recherche.
- Il est possible modifier certains champs de la commande (qty_to_pack, qty_packed, qty_package).
- Il est possible d'ajouter un produit à un colis.
- Il est possible de scanner un QRCode. 
  `([A-z_0-9]*).([A-z\-0-9]*)` ex : **KeyNetic_V1_AFAAAA.KP-12346**
  Groupe 1 : Numéro de série du produit
  Groupe 2 : Numéro de la commande
  Le script va afficher un warning si le numéro de commande lié au produit n'est pas le même que le numéro de commande sélextionner.

#### **_/Order/:id_**
Pour y accéder il faut d'abord entrer dans la page `/products` et cliquer sur un des numéro de série d'un produit.
On peut voir les quelques informations du produit.
// TODO : Regarder pourquoi je n'ai qu'un produit dans cette page

#### **_/Products_**
Liste tous les produits. On peut voir en détail les informations d'un produit en cliquant sur son numéro de série.

#### **_/Product/:id_**
Liste toutes les informations d'un produit. On peut également aller voir la commande associé et y accéder graçe au lien.

#### **_/Parcels_**
Liste toutes des colis. Il est possible de voir tous les produits dans associés a un colis.

-----

# User Stories

##### 1 - Listing des commandes

**En tant que** Logisticien
**Je veux** pouvoir connaitre la liste des commandes clients et leur état
**Afin de savoir** ce que je dois traiter dans la journée, et suivre l’état de mes expéditions

-> Voir page /orders

##### 2 - Détail de commande

**En tant que** Logisticien
**Je veux** pouvoir accéder à une commande pour connaitre la liste des produits préparés et/ou à préparer
**Afin de savoir** où j’en suis dans ma préparation de commande, mais aussi pour être certain de ne rien oublier et ne pas me tromper dans ce que je prépare pour mes clients

Voir page /orders

##### 3 - Affectation de produit

**En Tant que** Logisticien
**Je veux** pouvoir scanner mon produit (QrCode) pour l'associer à ma commande
Afin de garantir que le produit sélectionné fait bien parti de la commande, et pour éviter des erreurs de saisie
**Règle métier** : Mes produits sont sérialisés da la manière suivante : KeyNetic_V1_AAAAAA
KeyNetic ou KeyVibe
V1, V2, V3...
AAAAAA > Caractère unique par produit/version
 
Voir page /orders

##### 4 - Découpage de l'expédition

**En Tant que** Logisticien
**Je veux** pouvoir grouper mes produits préparés sous forme de colis
Afin de pouvoir expédier ma commande en plusieurs fois et pour y assurer un suivi de livraison distinct

Voir page /orders

##### 5 - Gestion du poids des colis

**En Tant que** Logisticien
**Je veux** pouvoir connaitre le poids de chacun de mes produits pendant la préparation
Afin d'affecter mon produit à un colis choisi pour optimiser et répartir la charge de mes colis 

##### 6 - Suivi des expéditions

**En Tant que** Logisticien
**Je veux** pouvoir saisir le numéro de suivi/tracking de mes paquets au moment (ou après) l'expédition
Afin de me permettre de suivre mes colis plus tard

Voir page /parcels