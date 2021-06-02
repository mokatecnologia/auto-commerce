PS3="Selecione uma das opções acima: "

select opt in info add-pkg add-dev-pkg sair; do
    
    case $opt in
        info)
            yarn workspaces info
            break
        ;;
        add-pkg)
            read -p "Digite o nome do workspace (api ou web): " n1
            read -p "Digite o nome do package: " n2
            yarn workspace $n1 add $n2
            break
        ;;
        add-dev-pkg)
            read -p "Digite o nome do workspace (api ou web): " n1
            read -p "Digite o nome do package: " n2
            yarn workspace $n1 add $n2 --dev
            break
        ;;
        sair)
            break
        ;;
        *)
            echo "Opção inválida $REPLY"
        ;;
    esac
done
