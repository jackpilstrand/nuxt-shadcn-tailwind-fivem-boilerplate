fx_version 'cerulean'
game 'gta5'
lua54 'yes'

client_scripts {
    'main/main.lua'  -- Your client-side Lua logic
}

server_scripts {
    'server/main.lua',  -- Your server-side Lua logic
}

shared_scripts {
    'config.lua'  -- Shared configuration file
}

-- Specify the UI page to load (updated for production/compiled version) -- DEV 'http://localhost:3000/'
ui_page 'http://localhost:3001/' 

-- Specify the files to include in the FiveM resource after UI compilation
files {
    'dist/index.html',  -- The compiled UI page
    'dist/assets/**',    -- All assets (images, JavaScript, CSS, etc.)
    'dist/fonts/**',     -- Any custom fonts
}
