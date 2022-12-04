# As an admin I want to update properties so that I can update them

Given that security officers are in charge of installation amd maintenance of security cameras and property data is almost immutable, it makes no sense for clients to update their properties.

Therefore, after checking that the caller is an admin, the system will receive the new property data and set it as the old property's data. The property updated is the one with the same id as the one sent in the update.
