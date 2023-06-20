# Designing a Document Database

From [Schema Design and Relationship in NoSQL Document-based databases](https://blog.usu.com/en-us/schema-design-and-relationship-in-nosql-document-based-databases):

> General recommendation for schema modelling and relationships:
>
> 1. One-to-one relationship: <mark style="color:yellow;">**embedding**</mark> model preferred
> 2. One-to-few relationships: <mark style="color:yellow;">**embedding**</mark> model preferred
> 3. One-to-many relationships: <mark style="color:purple;">**referencing**</mark> model preferred
> 4. Many-to-many relationships: <mark style="color:purple;">**referencing**</mark> model preferred
> 5. Favour embedding unless there is a compelling reason not to
> 6. Needing to access an object on its own is a compelling reason not to embed it
> 7. Avoid joins and populate (lookups) if possible, but don't be afraid if they can provide a better schema design
> 8. Arrays should not grow without bound. If there are more than a couple of hundred documents on the many sides, don't embed them; if there are more than a few thousand documents on the many sides, don't use an array of ObjectID references.

