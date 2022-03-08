
## Rust backend

Podman needs a bit more [configuration](https://github.com/containers/podman/issues/9390#issuecomment-970305169)
- [ ] add this information to my install script
Diesel, at the moment, only supports sql dbs
may have to ```rustup install nightly```
### diesel (or how I learned to love sql again)
```bash

# bash/zsh shells
export DATABASE_URL=postgres://rocket:rocket@localhost/rocket
# fish
set -xg DATABASE_URL postgres://rocket:rocket@localhost/rocket 
diesel setup # (granted you cargo install diesel_cli) will create a migration folder
diesel migration generate create_todo_table
```

Inside the migration folder you can define the following to generate the following table at when calling``` diesel migration run ```
```sql

create table todo (
  id serial primary key,
  title varchar(255) not null,
  checked boolean not null default false
);
```

This is really cool because it will autogrenerate a schema.rs in the src folder and a disel.toml file 

## Svelte frontend

Impressive [websites](https://www.freecodecamp.org/news/15-web-developer-portfolios-to-inspire-you-137fb1743cae/)
