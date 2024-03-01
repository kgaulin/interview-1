# User Story

En tant qu'utilisateur, je veux être capable d'ajouter un fichier dans mon compte et de voir une liste de mes fichiers. Le traitement du fichier doit se faire de manière asynchrone, et je veux être notifié dans la liste lorsque le fichier est traité, sans avoir à rafraîchir la page, et enfin, je veux pouvoir supprimer un fichier de ma liste.

## Critères d'Acceptation

1. En tant qu'utilisateur, je veux pouvoir ajouter un fichier en sélectionnant "Ajouter un fichier" et en choisissant le fichier depuis mon système.

2. Lorsque le fichier est en cours de traitement, je veux voir une indication visuelle dans ma liste de fichiers sans devoir actualiser la page.

3. Une fois le traitement du fichier terminé, je veux recevoir une notification dans ma liste de fichiers indiquant que le fichier est prêt à être téléchargé.

4. Je veux avoir la possibilité de supprimer un fichier de ma liste en cliquant sur une icône de suppression à côté du fichier.

## Definition of Done

- L'interface utilisateur permet d'ajouter un fichier avec succès.

- Le traitement asynchrone du fichier est géré de manière fiable.

- L'interface utilisateur affiche l'état de traitement du fichier sans besoin de rafraîchissement.

- Un fichier peut être supprimé de la liste avec succès.

- Toutes les fonctionnalités sont testées et fonctionnent de manière fiable.

## API

     https://interview-1-ozqcmh8zk-kgaulin1.vercel.app/api

### POST /images

#### Parameters (formdata)

file : File
name : string

#### Response (json)

    { "id":  string, "name":  string, status:  "processing" | "ready" }

### GET /images

#### Parameters

none

#### Response (json)

    { "id":  string, "name":  string, status:  "processing" | "ready" }[]

### DELETE /images/[id]

#### Parameters

id: string

#### Response (json)

    no data
