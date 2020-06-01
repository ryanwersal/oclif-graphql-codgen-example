init:
	yarn

generate:
	# Must set NODE_ENV to production to work around linked graphql conflicts.
	# See https://github.com/graphql/graphql-js/issues/1358 for details.
	NODE_ENV=production yarn generate
