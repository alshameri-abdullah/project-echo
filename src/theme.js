import {definePreset} from '@primeuix/themes';

export const PrimeVueTheme = definePreset({
    primitive: {
        borderRadius: {
            none: '0',
            xs: '2px',
            sm: '4px',
            md: '6px',
            lg: '8px',
            xl: '12px'
        },
        green: {
            50: '#f0fdf4',
            100: '#dcfce7',
            200: '#bbf7d0',
            300: '#86efac',
            400: '#4ade80',
            500: '#22c55e',
            600: '#16a34a',
            700: '#15803d',
            800: '#166534',
            900: '#14532d',
            950: '#052e16'
        },
        red: {
            50: '#fef2f2',
            100: '#fee2e2',
            200: '#fecaca',
            300: '#fca5a5',
            400: '#f87171',
            500: '#ef4444',
            600: '#dc2626',
            700: '#b91c1c',
            800: '#991b1b',
            900: '#7f1d1d',
            950: '#450a0a'
        },
        orange: {
            50: '#fff7ed',
            100: '#ffedd5',
            200: '#fed7aa',
            300: '#fdba74',
            400: '#fb923c',
            500: '#f97316',
            600: '#ea580c',
            700: '#c2410c',
            800: '#9a3412',
            900: '#7c2d12',
            950: '#431407'
        },
        amber: {
            50: '#fffbeb',
            100: '#fef3c7',
            200: '#fde68a',
            300: '#fcd34d',
            400: '#fbbf24',
            500: '#f59e0b',
            600: '#d97706',
            700: '#b45309',
            800: '#92400e',
            900: '#78350f',
            950: '#451a03'
        },
        sky: {
            50: '#f0f9ff',
            100: '#e0f2fe',
            200: '#bae6fd',
            300: '#7dd3fc',
            400: '#38bdf8',
            500: '#0ea5e9',
            600: '#0284c7',
            700: '#0369a1',
            800: '#075985',
            900: '#0c4a6e',
            950: '#082f49'
        },
        purple: {
            50: '#faf5ff',
            100: '#f3e8ff',
            200: '#e9d5ff',
            300: '#d8b4fe',
            400: '#c084fc',
            500: '#a855f7',
            600: '#9333ea',
            700: '#7e22ce',
            800: '#6b21a8',
            900: '#581c87',
            950: '#3b0764'
        },
        zinc: {
            50: '#fafafa',
            100: '#f4f4f5',
            200: '#e4e4e7',
            300: '#d4d4d8',
            400: '#a1a1aa',
            500: '#71717a',
            600: '#52525b',
            700: '#3f3f46',
            800: '#27272a',
            900: '#18181b',
            950: '#09090b'
        },
        stone: {
            50: '#fafaf9',
            100: '#f5f5f4',
            200: '#e7e5e4',
            300: '#d6d3d1',
            400: '#a8a29e',
            500: '#78716c',
            600: '#57534e',
            700: '#44403c',
            800: '#292524',
            900: '#1c1917',
            950: '#0c0a09'
        },
        brown: {
            50: '#f9f7f3',
            100: '#f1ede3',
            200: '#e6ddcc',
            300: '#d0bfa1',
            400: '#bda07a',
            500: '#af8960',
            600: '#a27854',
            700: '#876247',
            800: '#6e503e',
            900: '#5a4234',
            950: '#30221a'
        }
    },
    semantic: {
        transitionDuration: '0.2s',
        focusRing: {
            width: '1px',
            style: 'solid',
            color: '{primary.color}',
            offset: '2px',
            shadow: 'none'
        },
        disabledOpacity: '0.6',
        iconSize: '1rem',
        anchorGutter: '2px',
        primary: {
            50: '{brown.50}',
            100: '{brown.100}',
            200: '{brown.200}',
            300: '{brown.300}',
            400: '{brown.400}',
            500: '{brown.500}',
            600: '{brown.600}',
            700: '{brown.700}',
            800: '{brown.800}',
            900: '{brown.900}',
            950: '{brown.950}'
        },
        formField: {
            paddingX: '0.75rem',
            paddingY: '0.5rem',
            sm: {
                fontSize: '0.875rem',
                paddingX: '0.625rem',
                paddingY: '0.375rem'
            },
            lg: {
                fontSize: '1.125rem',
                paddingX: '0.875rem',
                paddingY: '0.625rem'
            },
            borderRadius: '{border.radius.md}',
            focusRing: {
                width: '0',
                style: 'none',
                color: 'transparent',
                offset: '0',
                shadow: 'none'
            },
            transitionDuration: '{transition.duration}'
        },
        list: {
            padding: '0.25rem 0.25rem',
            gap: '2px',
            header: {
                padding: '0.5rem 1rem 0.25rem 1rem'
            },
            option: {
                padding: '0.5rem 0.75rem',
                borderRadius: '{border.radius.sm}'
            },
            optionGroup: {
                padding: '0.5rem 0.75rem',
                fontWeight: '600'
            }
        },
        content: {
            borderRadius: '{border.radius.md}'
        },
        mask: {
            transitionDuration: '0.3s'
        },
        navigation: {
            list: {
                padding: '0.25rem 0.25rem',
                gap: '2px'
            },
            item: {
                padding: '0.5rem 0.75rem',
                borderRadius: '{border.radius.sm}',
                gap: '0.5rem'
            },
            submenuLabel: {
                padding: '0.5rem 0.75rem',
                fontWeight: '600'
            },
            submenuIcon: {
                size: '0.875rem'
            }
        },
        overlay: {
            select: {
                borderRadius: '{border.radius.md}',
                shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)'
            },
            popover: {
                borderRadius: '{border.radius.md}',
                padding: '0.75rem',
                shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)'
            },
            modal: {
                borderRadius: '{border.radius.xl}',
                padding: '1.25rem',
                shadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
            },
            navigation: {
                shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)'
            }
        },
        colorScheme: {
            light: {
                surface: {
                    0: '#ffffff',
                    50: '{stone.50}',
                    100: '{stone.100}',
                    200: '{stone.200}',
                    300: '{stone.300}',
                    400: '{stone.400}',
                    500: '{stone.500}',
                    600: '{stone.600}',
                    700: '{stone.700}',
                    800: '{stone.800}',
                    900: '{stone.900}',
                    950: '{stone.950}'
                },
                primary: {
                    color: '{primary.600}',
                    contrastColor: '#ffffff',
                    hoverColor: '{primary.700}',
                    activeColor: '{primary.800}'
                },
                highlight: {
                    background: '{primary.50}',
                    focusBackground: '{primary.100}',
                    color: '{primary.700}',
                    focusColor: '{primary.800}'
                },
                mask: {
                    background: 'rgba(0,0,0,0.4)',
                    color: '{surface.200}'
                },
                formField: {
                    background: '{surface.0}',
                    disabledBackground: '{surface.200}',
                    filledBackground: '{surface.50}',
                    filledHoverBackground: '{surface.50}',
                    filledFocusBackground: '{surface.50}',
                    borderColor: '{surface.300}',
                    hoverBorderColor: '{surface.400}',
                    focusBorderColor: '{primary.color}',
                    invalidBorderColor: '{red.400}',
                    color: '{surface.700}',
                    disabledColor: '{surface.500}',
                    placeholderColor: '{surface.500}',
                    invalidPlaceholderColor: '{red.600}',
                    floatLabelColor: '{surface.500}',
                    floatLabelFocusColor: '{primary.600}',
                    floatLabelActiveColor: '{surface.500}',
                    floatLabelInvalidColor: '{form.field.invalid.placeholder.color}',
                    iconColor: '{surface.400}',
                    shadow: '0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)'
                },
                text: {
                    color: '{surface.700}',
                    hoverColor: '{surface.800}',
                    mutedColor: '{surface.500}',
                    hoverMutedColor: '{surface.600}'
                },
                content: {
                    background: '{surface.0}',
                    hoverBackground: '{surface.100}',
                    borderColor: '{surface.200}',
                    color: '{text.color}',
                    hoverColor: '{text.hover.color}'
                },
                overlay: {
                    select: {
                        background: '{surface.0}',
                        borderColor: '{surface.200}',
                        color: '{text.color}'
                    },
                    popover: {
                        background: '{surface.0}',
                        borderColor: '{surface.200}',
                        color: '{text.color}'
                    },
                    modal: {
                        background: '{surface.0}',
                        borderColor: '{surface.200}',
                        color: '{text.color}'
                    }
                },
                list: {
                    option: {
                        focusBackground: '{surface.100}',
                        selectedBackground: '{highlight.background}',
                        selectedFocusBackground: '{highlight.focus.background}',
                        color: '{text.color}',
                        focusColor: '{text.hover.color}',
                        selectedColor: '{highlight.color}',
                        selectedFocusColor: '{highlight.focus.color}',
                        icon: {
                            color: '{surface.400}',
                            focusColor: '{surface.500}'
                        }
                    },
                    optionGroup: {
                        background: 'transparent',
                        color: '{text.muted.color}'
                    }
                },
                navigation: {
                    item: {
                        focusBackground: '{surface.100}',
                        activeBackground: '{surface.100}',
                        color: '{text.color}',
                        focusColor: '{text.hover.color}',
                        activeColor: '{text.hover.color}',
                        icon: {
                            color: '{surface.400}',
                            focusColor: '{surface.500}',
                            activeColor: '{surface.500}'
                        }
                    },
                    submenuLabel: {
                        background: 'transparent',
                        color: '{text.muted.color}'
                    },
                    submenuIcon: {
                        color: '{surface.400}',
                        focusColor: '{surface.500}',
                        activeColor: '{surface.500}'
                    }
                }
            },
            dark: {
                surface: {
                    0: '#ffffff',
                    50: '{zinc.50}',
                    100: '{zinc.100}',
                    200: '{zinc.200}',
                    300: '{zinc.300}',
                    400: '{zinc.400}',
                    500: '{zinc.500}',
                    600: '{zinc.600}',
                    700: '{zinc.700}',
                    800: '{zinc.800}',
                    900: '{zinc.900}',
                    950: '{zinc.950}'
                },
                primary: {
                    color: '{primary.400}',
                    contrastColor: '{surface.900}',
                    hoverColor: '{primary.300}',
                    activeColor: '{primary.200}'
                },
                highlight: {
                    background: 'color-mix(in srgb, {primary.400}, transparent 84%)',
                    focusBackground: 'color-mix(in srgb, {primary.400}, transparent 76%)',
                    color: 'rgba(255,255,255,.87)',
                    focusColor: 'rgba(255,255,255,.87)'
                },
                mask: {
                    background: 'rgba(0,0,0,0.6)',
                    color: '{surface.200}'
                },
                formField: {
                    background: '{surface.950}',
                    disabledBackground: '{surface.700}',
                    filledBackground: '{surface.800}',
                    filledHoverBackground: '{surface.800}',
                    filledFocusBackground: '{surface.800}',
                    borderColor: '{surface.600}',
                    hoverBorderColor: '{surface.500}',
                    focusBorderColor: '{primary.color}',
                    invalidBorderColor: '{red.300}',
                    color: '{surface.0}',
                    disabledColor: '{surface.400}',
                    placeholderColor: '{surface.400}',
                    invalidPlaceholderColor: '{red.400}',
                    floatLabelColor: '{surface.400}',
                    floatLabelFocusColor: '{primary.color}',
                    floatLabelActiveColor: '{surface.400}',
                    floatLabelInvalidColor: '{form.field.invalid.placeholder.color}',
                    iconColor: '{surface.400}',
                    shadow: '0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)'
                },
                text: {
                    color: '{surface.0}',
                    hoverColor: '{surface.0}',
                    mutedColor: '{surface.400}',
                    hoverMutedColor: '{surface.300}'
                },
                content: {
                    background: '{surface.900}',
                    hoverBackground: '{surface.800}',
                    borderColor: '{surface.700}',
                    color: '{text.color}',
                    hoverColor: '{text.hover.color}'
                },
                overlay: {
                    select: {
                        background: '{surface.900}',
                        borderColor: '{surface.700}',
                        color: '{text.color}'
                    },
                    popover: {
                        background: '{surface.900}',
                        borderColor: '{surface.700}',
                        color: '{text.color}'
                    },
                    modal: {
                        background: '{surface.900}',
                        borderColor: '{surface.700}',
                        color: '{text.color}'
                    }
                },
                list: {
                    option: {
                        focusBackground: '{surface.800}',
                        selectedBackground: '{highlight.background}',
                        selectedFocusBackground: '{highlight.focus.background}',
                        color: '{text.color}',
                        focusColor: '{text.hover.color}',
                        selectedColor: '{highlight.color}',
                        selectedFocusColor: '{highlight.focus.color}',
                        icon: {
                            color: '{surface.500}',
                            focusColor: '{surface.400}'
                        }
                    },
                    optionGroup: {
                        background: 'transparent',
                        color: '{text.muted.color}'
                    }
                },
                navigation: {
                    item: {
                        focusBackground: '{surface.800}',
                        activeBackground: '{surface.800}',
                        color: '{text.color}',
                        focusColor: '{text.hover.color}',
                        activeColor: '{text.hover.color}',
                        icon: {
                            color: '{surface.500}',
                            focusColor: '{surface.400}',
                            activeColor: '{surface.400}'
                        }
                    },
                    submenuLabel: {
                        background: 'transparent',
                        color: '{text.muted.color}'
                    },
                    submenuIcon: {
                        color: '{surface.500}',
                        focusColor: '{surface.400}',
                        activeColor: '{surface.400}'
                    }
                }
            }
        }
    },
    components: {
        button: {
            root: {
                borderRadius: '{form.field.border.radius}',
                roundedBorderRadius: '2rem',
                gap: '0.5rem',
                paddingX: '{form.field.padding.x}',
                paddingY: '{form.field.padding.y}',
                iconOnlyWidth: '2.5rem',
                sm: {
                    fontSize: '{form.field.sm.font.size}',
                    paddingX: '{form.field.sm.padding.x}',
                    paddingY: '{form.field.sm.padding.y}',
                    iconOnlyWidth: '2rem'
                },
                lg: {
                    fontSize: '{form.field.lg.font.size}',
                    paddingX: '{form.field.lg.padding.x}',
                    paddingY: '{form.field.lg.padding.y}',
                    iconOnlyWidth: '3rem'
                },
                label: {
                    fontWeight: '500'
                },
                raisedShadow: '0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)',
                focusRing: {
                    width: '{focus.ring.width}',
                    style: '{focus.ring.style}',
                    offset: '{focus.ring.offset}'
                },
                badgeSize: '1rem',
                transitionDuration: '{form.field.transition.duration}'
            },
            colorScheme: {
                light: {
                    root: {
                        primary: {
                            background: '{primary.color}',
                            hoverBackground: '{primary.hover.color}',
                            activeBackground: '{primary.active.color}',
                            borderColor: '{primary.color}',
                            hoverBorderColor: '{primary.hover.color}',
                            activeBorderColor: '{primary.active.color}',
                            color: '{primary.contrast.color}',
                            hoverColor: '{primary.contrast.color}',
                            activeColor: '{primary.contrast.color}',
                            focusRing: {
                                color: '{primary.color}',
                                shadow: 'none'
                            }
                        },
                        secondary: {
                            background: '{surface.100}',
                            hoverBackground: '{surface.200}',
                            activeBackground: '{surface.300}',
                            borderColor: '{surface.100}',
                            hoverBorderColor: '{surface.200}',
                            activeBorderColor: '{surface.300}',
                            color: '{surface.600}',
                            hoverColor: '{surface.700}',
                            activeColor: '{surface.800}',
                            focusRing: {
                                color: '{surface.600}',
                                shadow: 'none'
                            }
                        },
                        info: {
                            background: '{sky.500}',
                            hoverBackground: '{sky.600}',
                            activeBackground: '{sky.700}',
                            borderColor: '{sky.500}',
                            hoverBorderColor: '{sky.600}',
                            activeBorderColor: '{sky.700}',
                            color: '#ffffff',
                            hoverColor: '#ffffff',
                            activeColor: '#ffffff',
                            focusRing: {
                                color: '{sky.500}',
                                shadow: 'none'
                            }
                        },
                        success: {
                            background: '{green.500}',
                            hoverBackground: '{green.600}',
                            activeBackground: '{green.700}',
                            borderColor: '{green.500}',
                            hoverBorderColor: '{green.600}',
                            activeBorderColor: '{green.700}',
                            color: '#ffffff',
                            hoverColor: '#ffffff',
                            activeColor: '#ffffff',
                            focusRing: {
                                color: '{green.500}',
                                shadow: 'none'
                            }
                        },
                        warn: {
                            background: '{orange.500}',
                            hoverBackground: '{orange.600}',
                            activeBackground: '{orange.700}',
                            borderColor: '{orange.500}',
                            hoverBorderColor: '{orange.600}',
                            activeBorderColor: '{orange.700}',
                            color: '#ffffff',
                            hoverColor: '#ffffff',
                            activeColor: '#ffffff',
                            focusRing: {
                                color: '{orange.500}',
                                shadow: 'none'
                            }
                        },
                        help: {
                            background: '{purple.500}',
                            hoverBackground: '{purple.600}',
                            activeBackground: '{purple.700}',
                            borderColor: '{purple.500}',
                            hoverBorderColor: '{purple.600}',
                            activeBorderColor: '{purple.700}',
                            color: '#ffffff',
                            hoverColor: '#ffffff',
                            activeColor: '#ffffff',
                            focusRing: {
                                color: '{purple.500}',
                                shadow: 'none'
                            }
                        },
                        danger: {
                            background: '{red.500}',
                            hoverBackground: '{red.600}',
                            activeBackground: '{red.700}',
                            borderColor: '{red.500}',
                            hoverBorderColor: '{red.600}',
                            activeBorderColor: '{red.700}',
                            color: '#ffffff',
                            hoverColor: '#ffffff',
                            activeColor: '#ffffff',
                            focusRing: {
                                color: '{red.500}',
                                shadow: 'none'
                            }
                        },
                        contrast: {
                            background: '{surface.950}',
                            hoverBackground: '{surface.900}',
                            activeBackground: '{surface.800}',
                            borderColor: '{surface.950}',
                            hoverBorderColor: '{surface.900}',
                            activeBorderColor: '{surface.800}',
                            color: '{surface.0}',
                            hoverColor: '{surface.0}',
                            activeColor: '{surface.0}',
                            focusRing: {
                                color: '{surface.950}',
                                shadow: 'none'
                            }
                        }
                    },
                    outlined: {
                        primary: {
                            hoverBackground: '{primary.50}',
                            activeBackground: '{primary.100}',
                            borderColor: '{primary.200}',
                            color: '{primary.color}'
                        },
                        secondary: {
                            hoverBackground: '{surface.50}',
                            activeBackground: '{surface.100}',
                            borderColor: '{surface.200}',
                            color: '{surface.500}'
                        },
                        success: {
                            hoverBackground: '{green.50}',
                            activeBackground: '{green.100}',
                            borderColor: '{green.200}',
                            color: '{green.500}'
                        },
                        info: {
                            hoverBackground: '{sky.50}',
                            activeBackground: '{sky.100}',
                            borderColor: '{sky.200}',
                            color: '{sky.500}'
                        },
                        warn: {
                            hoverBackground: '{orange.50}',
                            activeBackground: '{orange.100}',
                            borderColor: '{orange.200}',
                            color: '{orange.500}'
                        },
                        help: {
                            hoverBackground: '{purple.50}',
                            activeBackground: '{purple.100}',
                            borderColor: '{purple.200}',
                            color: '{purple.500}'
                        },
                        danger: {
                            hoverBackground: '{red.50}',
                            activeBackground: '{red.100}',
                            borderColor: '{red.200}',
                            color: '{red.500}'
                        },
                        contrast: {
                            hoverBackground: '{surface.50}',
                            activeBackground: '{surface.100}',
                            borderColor: '{surface.700}',
                            color: '{surface.950}'
                        },
                        plain: {
                            hoverBackground: '{surface.50}',
                            activeBackground: '{surface.100}',
                            borderColor: '{surface.200}',
                            color: '{surface.700}'
                        }
                    },
                    text: {
                        primary: {
                            hoverBackground: '{primary.50}',
                            activeBackground: '{primary.100}',
                            color: '{primary.color}'
                        },
                        secondary: {
                            hoverBackground: '{surface.50}',
                            activeBackground: '{surface.100}',
                            color: '{surface.500}'
                        },
                        success: {
                            hoverBackground: '{green.50}',
                            activeBackground: '{green.100}',
                            color: '{green.500}'
                        },
                        info: {
                            hoverBackground: '{sky.50}',
                            activeBackground: '{sky.100}',
                            color: '{sky.500}'
                        },
                        warn: {
                            hoverBackground: '{orange.50}',
                            activeBackground: '{orange.100}',
                            color: '{orange.500}'
                        },
                        help: {
                            hoverBackground: '{purple.50}',
                            activeBackground: '{purple.100}',
                            color: '{purple.500}'
                        },
                        danger: {
                            hoverBackground: '{red.50}',
                            activeBackground: '{red.100}',
                            color: '{red.500}'
                        },
                        contrast: {
                            hoverBackground: '{surface.50}',
                            activeBackground: '{surface.100}',
                            color: '{surface.950}'
                        },
                        plain: {
                            hoverBackground: '{surface.50}',
                            activeBackground: '{surface.100}',
                            color: '{surface.700}'
                        }
                    },
                    link: {
                        color: '{primary.color}',
                        hoverColor: '{primary.color}',
                        activeColor: '{primary.color}'
                    }
                },
                dark: {
                    root: {
                        primary: {
                            background: '{primary.color}',
                            hoverBackground: '{primary.hover.color}',
                            activeBackground: '{primary.active.color}',
                            borderColor: '{primary.color}',
                            hoverBorderColor: '{primary.hover.color}',
                            activeBorderColor: '{primary.active.color}',
                            color: '{primary.contrast.color}',
                            hoverColor: '{primary.contrast.color}',
                            activeColor: '{primary.contrast.color}',
                            focusRing: {
                                color: '{primary.color}',
                                shadow: 'none'
                            }
                        },
                        secondary: {
                            background: '{surface.800}',
                            hoverBackground: '{surface.700}',
                            activeBackground: '{surface.600}',
                            borderColor: '{surface.800}',
                            hoverBorderColor: '{surface.700}',
                            activeBorderColor: '{surface.600}',
                            color: '{surface.300}',
                            hoverColor: '{surface.200}',
                            activeColor: '{surface.100}',
                            focusRing: {
                                color: '{surface.300}',
                                shadow: 'none'
                            }
                        },
                        info: {
                            background: '{sky.400}',
                            hoverBackground: '{sky.300}',
                            activeBackground: '{sky.200}',
                            borderColor: '{sky.400}',
                            hoverBorderColor: '{sky.300}',
                            activeBorderColor: '{sky.200}',
                            color: '{sky.950}',
                            hoverColor: '{sky.950}',
                            activeColor: '{sky.950}',
                            focusRing: {
                                color: '{sky.400}',
                                shadow: 'none'
                            }
                        },
                        success: {
                            background: '{green.400}',
                            hoverBackground: '{green.300}',
                            activeBackground: '{green.200}',
                            borderColor: '{green.400}',
                            hoverBorderColor: '{green.300}',
                            activeBorderColor: '{green.200}',
                            color: '{green.950}',
                            hoverColor: '{green.950}',
                            activeColor: '{green.950}',
                            focusRing: {
                                color: '{green.400}',
                                shadow: 'none'
                            }
                        },
                        warn: {
                            background: '{orange.400}',
                            hoverBackground: '{orange.300}',
                            activeBackground: '{orange.200}',
                            borderColor: '{orange.400}',
                            hoverBorderColor: '{orange.300}',
                            activeBorderColor: '{orange.200}',
                            color: '{orange.950}',
                            hoverColor: '{orange.950}',
                            activeColor: '{orange.950}',
                            focusRing: {
                                color: '{orange.400}',
                                shadow: 'none'
                            }
                        },
                        help: {
                            background: '{purple.400}',
                            hoverBackground: '{purple.300}',
                            activeBackground: '{purple.200}',
                            borderColor: '{purple.400}',
                            hoverBorderColor: '{purple.300}',
                            activeBorderColor: '{purple.200}',
                            color: '{purple.950}',
                            hoverColor: '{purple.950}',
                            activeColor: '{purple.950}',
                            focusRing: {
                                color: '{purple.400}',
                                shadow: 'none'
                            }
                        },
                        danger: {
                            background: '{red.400}',
                            hoverBackground: '{red.300}',
                            activeBackground: '{red.200}',
                            borderColor: '{red.400}',
                            hoverBorderColor: '{red.300}',
                            activeBorderColor: '{red.200}',
                            color: '{red.950}',
                            hoverColor: '{red.950}',
                            activeColor: '{red.950}',
                            focusRing: {
                                color: '{red.400}',
                                shadow: 'none'
                            }
                        },
                        contrast: {
                            background: '{surface.0}',
                            hoverBackground: '{surface.100}',
                            activeBackground: '{surface.200}',
                            borderColor: '{surface.0}',
                            hoverBorderColor: '{surface.100}',
                            activeBorderColor: '{surface.200}',
                            color: '{surface.950}',
                            hoverColor: '{surface.950}',
                            activeColor: '{surface.950}',
                            focusRing: {
                                color: '{surface.0}',
                                shadow: 'none'
                            }
                        }
                    },
                    outlined: {
                        primary: {
                            hoverBackground: 'color-mix(in srgb, {primary.color}, transparent 96%)',
                            activeBackground: 'color-mix(in srgb, {primary.color}, transparent 84%)',
                            borderColor: '{primary.700}',
                            color: '{primary.color}'
                        },
                        secondary: {
                            hoverBackground: 'rgba(255,255,255,0.04)',
                            activeBackground: 'rgba(255,255,255,0.16)',
                            borderColor: '{surface.700}',
                            color: '{surface.400}'
                        },
                        success: {
                            hoverBackground: 'color-mix(in srgb, {green.400}, transparent 96%)',
                            activeBackground: 'color-mix(in srgb, {green.400}, transparent 84%)',
                            borderColor: '{green.700}',
                            color: '{green.400}'
                        },
                        info: {
                            hoverBackground: 'color-mix(in srgb, {sky.400}, transparent 96%)',
                            activeBackground: 'color-mix(in srgb, {sky.400}, transparent 84%)',
                            borderColor: '{sky.700}',
                            color: '{sky.400}'
                        },
                        warn: {
                            hoverBackground: 'color-mix(in srgb, {orange.400}, transparent 96%)',
                            activeBackground: 'color-mix(in srgb, {orange.400}, transparent 84%)',
                            borderColor: '{orange.700}',
                            color: '{orange.400}'
                        },
                        help: {
                            hoverBackground: 'color-mix(in srgb, {purple.400}, transparent 96%)',
                            activeBackground: 'color-mix(in srgb, {purple.400}, transparent 84%)',
                            borderColor: '{purple.700}',
                            color: '{purple.400}'
                        },
                        danger: {
                            hoverBackground: 'color-mix(in srgb, {red.400}, transparent 96%)',
                            activeBackground: 'color-mix(in srgb, {red.400}, transparent 84%)',
                            borderColor: '{red.700}',
                            color: '{red.400}'
                        },
                        contrast: {
                            hoverBackground: '{surface.800}',
                            activeBackground: '{surface.700}',
                            borderColor: '{surface.500}',
                            color: '{surface.0}'
                        },
                        plain: {
                            hoverBackground: '{surface.800}',
                            activeBackground: '{surface.700}',
                            borderColor: '{surface.600}',
                            color: '{surface.0}'
                        }
                    },
                    text: {
                        primary: {
                            hoverBackground: 'color-mix(in srgb, {primary.color}, transparent 96%)',
                            activeBackground: 'color-mix(in srgb, {primary.color}, transparent 84%)',
                            color: '{primary.color}'
                        },
                        secondary: {
                            hoverBackground: '{surface.800}',
                            activeBackground: '{surface.700}',
                            color: '{surface.400}'
                        },
                        success: {
                            hoverBackground: 'color-mix(in srgb, {green.400}, transparent 96%)',
                            activeBackground: 'color-mix(in srgb, {green.400}, transparent 84%)',
                            color: '{green.400}'
                        },
                        info: {
                            hoverBackground: 'color-mix(in srgb, {sky.400}, transparent 96%)',
                            activeBackground: 'color-mix(in srgb, {sky.400}, transparent 84%)',
                            color: '{sky.400}'
                        },
                        warn: {
                            hoverBackground: 'color-mix(in srgb, {orange.400}, transparent 96%)',
                            activeBackground: 'color-mix(in srgb, {orange.400}, transparent 84%)',
                            color: '{orange.400}'
                        },
                        help: {
                            hoverBackground: 'color-mix(in srgb, {purple.400}, transparent 96%)',
                            activeBackground: 'color-mix(in srgb, {purple.400}, transparent 84%)',
                            color: '{purple.400}'
                        },
                        danger: {
                            hoverBackground: 'color-mix(in srgb, {red.400}, transparent 96%)',
                            activeBackground: 'color-mix(in srgb, {red.400}, transparent 84%)',
                            color: '{red.400}'
                        },
                        contrast: {
                            hoverBackground: '{surface.800}',
                            activeBackground: '{surface.700}',
                            color: '{surface.0}'
                        },
                        plain: {
                            hoverBackground: '{surface.800}',
                            activeBackground: '{surface.700}',
                            color: '{surface.0}'
                        }
                    },
                    link: {
                        color: '{primary.color}',
                        hoverColor: '{primary.color}',
                        activeColor: '{primary.color}'
                    }
                }
            }
        },
        inputtext: {
            root: {
                background: '{form.field.background}',
                disabledBackground: '{form.field.disabled.background}',
                filledBackground: '{form.field.filled.background}',
                filledHoverBackground: '{form.field.filled.hover.background}',
                filledFocusBackground: '{form.field.filled.focus.background}',
                borderColor: '{form.field.border.color}',
                hoverBorderColor: '{form.field.hover.border.color}',
                focusBorderColor: '{form.field.focus.border.color}',
                invalidBorderColor: '{form.field.invalid.border.color}',
                color: '{form.field.color}',
                disabledColor: '{form.field.disabled.color}',
                placeholderColor: '{form.field.placeholder.color}',
                invalidPlaceholderColor: '{form.field.invalid.placeholder.color}',
                shadow: '{form.field.shadow}',
                paddingX: '{form.field.padding.x}',
                paddingY: '{form.field.padding.y}',
                borderRadius: '{form.field.border.radius}',
                focusRing: {
                    width: '{form.field.focus.ring.width}',
                    style: '{form.field.focus.ring.style}',
                    color: '{form.field.focus.ring.color}',
                    offset: '{form.field.focus.ring.offset}',
                    shadow: '{form.field.focus.ring.shadow}'
                },
                transitionDuration: '{form.field.transition.duration}',
                sm: {
                    fontSize: '{form.field.sm.font.size}',
                    paddingX: '{form.field.sm.padding.x}',
                    paddingY: '{form.field.sm.padding.y}'
                },
                lg: {
                    fontSize: '{form.field.lg.font.size}',
                    paddingX: '{form.field.lg.padding.x}',
                    paddingY: '{form.field.lg.padding.y}'
                }
            }
        },
        password: {
            meter: {
                background: '{content.border.color}',
                borderRadius: '{content.border.radius}',
                height: '.75rem'
            },
            icon: {
                color: '{form.field.icon.color}'
            },
            overlay: {
                background: '{overlay.popover.background}',
                borderColor: '{overlay.popover.border.color}',
                borderRadius: '{overlay.popover.border.radius}',
                color: '{overlay.popover.color}',
                padding: '{overlay.popover.padding}',
                shadow: '{overlay.popover.shadow}'
            },
            content: {
                gap: '0.5rem'
            },
            colorScheme: {
                light: {
                    strength: {
                        weakBackground: '{red.500}',
                        mediumBackground: '{amber.500}',
                        strongBackground: '{green.500}'
                    }
                },
                dark: {
                    strength: {
                        weakBackground: '{red.400}',
                        mediumBackground: '{amber.400}',
                        strongBackground: '{green.400}'
                    }
                }
            }
        }
    },
    css: "\n    li.p-autocomplete-option,\n    div.p-cascadeselect-option-content,\n    li.p-listbox-option,\n    li.p-multiselect-option,\n    li.p-select-option,\n    li.p-listbox-option,\n    div.p-tree-node-content,\n    li.p-datatable-filter-constraint,\n    .p-datatable .p-datatable-tbody > tr,\n    .p-treetable .p-treetable-tbody > tr,\n    div.p-menu-item-content,\n    div.p-tieredmenu-item-content,\n    div.p-contextmenu-item-content,\n    div.p-menubar-item-content,\n    div.p-megamenu-item-content,\n    div.p-panelmenu-header-content,\n    div.p-panelmenu-item-content,\n    th.p-datatable-header-cell,\n    th.p-treetable-header-cell,\n    thead.p-datatable-thead > tr > th,\n    .p-treetable thead.p-treetable-thead>tr>th {\n        transition: none;\n    }\n"
})
