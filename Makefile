f?=
index:
	@echo ''
	@echo '-----------------------------------------------------------'
	@echo 'Using make add f=<component_name> to install new component'
	@echo 'E.x:'
	@echo 'make add f=button'
	@echo '-----------------------------------------------------------'
	@echo ''

add:
	npx shadcn@latest add ${f}