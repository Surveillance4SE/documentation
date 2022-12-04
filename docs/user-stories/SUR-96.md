# As an admin I want to delete properties so that I can delete them

Since admins register clients to the platform, it makes no sense to allow clients to delete their own properties. This also extends to security officers.

After this restriction is validated, the property and all it's sensors should be deleted from the system. In order to respect the relation model's constraints, and to minimize changes in the code, first all of the sensors are deleted, then, the property can be deleted.
