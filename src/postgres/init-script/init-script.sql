\c requestor_database

-- Create requestor_user table
CREATE TABLE IF NOT EXISTS requestor_user (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    firstname VARCHAR(255) NOT NULL,
    surname TEXT NOT NULL,
    email TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create requestor_resource table
CREATE TABLE IF NOT EXISTS requestor_resource (
    user_id UUID references requestor_user(id),
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    resource_name VARCHAR(255) NOT NULL,
    resource_data TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);