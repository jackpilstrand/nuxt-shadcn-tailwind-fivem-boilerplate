RegisterCommand('jackui', function()
    openUi()
end)

function openUi()
    SetNuiFocus(true, true)

    SendNUIMessage({
        type = "jackui",
        data = {
            Title = Config.Title
        }
    })
end

RegisterNUICallback('exit', function()
    SetNuiFocus(false, false)
end)
